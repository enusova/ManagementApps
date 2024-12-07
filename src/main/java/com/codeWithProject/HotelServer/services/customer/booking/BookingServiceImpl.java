package com.codeWithProject.HotelServer.services.customer.booking;


import com.codeWithProject.HotelServer.dto.ReservationDto;
import com.codeWithProject.HotelServer.dto.ReservationResponseDto;
import com.codeWithProject.HotelServer.entity.Reservation;
import com.codeWithProject.HotelServer.entity.Room;
import com.codeWithProject.HotelServer.entity.User;
import com.codeWithProject.HotelServer.enums.ReservationStatus;
import com.codeWithProject.HotelServer.repository.ReservationRepository;
import com.codeWithProject.HotelServer.repository.RoomRepository;
import com.codeWithProject.HotelServer.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final ReservationRepository reservationRepository;

    private final UserRepository userRepository;

    private final RoomRepository roomRepository;

    private static final int SEARCH_RESULT_PER_PAGE = 4;



    public boolean postReservation(ReservationDto reservationDto) {
        Optional<User> optionalUser = userRepository.findById(reservationDto.getUserId());
        Optional<Room> optionalRoom = roomRepository.findById(reservationDto.getRoomId());

        if (optionalUser.isPresent() && optionalRoom.isPresent()) {
            Reservation reservation = new Reservation();

            reservation.setRoom(optionalRoom.get());
            reservation.setUser(optionalUser.get());
            reservation.setCheckInDate(reservationDto.getCheckInDate());
            reservation.setCheckOutDate(reservationDto.getCheckOutDate());
            reservation.setReservationStatus(ReservationStatus.PENDING);

            Long days = ChronoUnit.DAYS.between(reservationDto.getCheckInDate(), reservationDto.getCheckOutDate());
            reservation.setPrice(optionalRoom.get().getPrice() * days);

            reservationRepository.save(reservation);
            return true;
        }
        return false;
    }


     public ReservationResponseDto getAllReservationsByUserId(Long userId, int pageNumber) {
         Pageable pageable = PageRequest.of(pageNumber, SEARCH_RESULT_PER_PAGE);

         Page<Reservation> reservationsPage = reservationRepository.findAllByUserId(pageable,userId);

         ReservationResponseDto reservationResponseDto = new ReservationResponseDto();

         reservationResponseDto.setReservationsDtoList(reservationsPage.stream().map(Reservation::getReservationDto)
                 .collect(Collectors.toList()));

         reservationResponseDto.setPageNumber(reservationsPage.getPageable().getPageNumber());
         reservationResponseDto.setTotalPages(reservationsPage.getTotalPages());

         return reservationResponseDto;
     }
}
