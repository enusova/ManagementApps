package com.codeWithProject.HotelServer.services.admin.reservation;


import com.codeWithProject.HotelServer.dto.ReservationDto;
import com.codeWithProject.HotelServer.dto.ReservationResponseDto;
import com.codeWithProject.HotelServer.entity.Reservation;
import com.codeWithProject.HotelServer.entity.Room;
import com.codeWithProject.HotelServer.enums.ReservationStatus;
import com.codeWithProject.HotelServer.repository.ReservationRepository;
import com.codeWithProject.HotelServer.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReservationServiceImpl  implements ReservationService{

    private final RoomRepository roomRepository;

    private final ReservationRepository reservationRepository;

    private static final int SEARCH_RESULT_PER_PAGE = 4;


    public ReservationResponseDto getAllReservations(int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber, SEARCH_RESULT_PER_PAGE);

        Page<Reservation> reservationsPage = reservationRepository.findAll(pageable);

        ReservationResponseDto reservationResponseDto = new ReservationResponseDto();

        reservationResponseDto.setReservationsDtoList(reservationsPage.stream().map(Reservation::getReservationDto)
                .collect(Collectors.toList()));

        reservationResponseDto.setPageNumber(reservationsPage.getPageable().getPageNumber());
        reservationResponseDto.setTotalPages(reservationsPage.getTotalPages());

        return reservationResponseDto;
    }


    public boolean changeReservationStatus(Long id, String status) {
        try {
            Optional<Reservation> optionalReservation = reservationRepository.findById(id);
            if (optionalReservation.isPresent()) {
                Reservation existingReservation = optionalReservation.get();

                if ("Approve".equalsIgnoreCase(status)) {
                    existingReservation.setReservationStatus(ReservationStatus.APPROVED);
                } else {
                    existingReservation.setReservationStatus(ReservationStatus.REJECTED);
                }

                reservationRepository.save(existingReservation);

                Room existingRoom = existingReservation.getRoom();
                if (existingRoom != null) {
                    existingRoom.setAvailable(false);
                    roomRepository.save(existingRoom);
                }

                return true; // العملية نجحت
            }
        } catch (Exception e) {
            // تسجيل الخطأ
            System.err.println("خطأ أثناء تحديث حالة الحجز: " + e.getMessage());
            e.printStackTrace();
        }
        return false; // العملية فشلت
    }


}
