package com.codeWithProject.HotelServer.services.customer.booking;

import com.codeWithProject.HotelServer.dto.ReservationDto;
import com.codeWithProject.HotelServer.dto.ReservationResponseDto;

public interface BookingService {

    boolean postReservation(ReservationDto reservationDto);

    ReservationResponseDto getAllReservationsByUserId(Long userId, int pageNumber);
}
