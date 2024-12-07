package com.codeWithProject.HotelServer.services.admin.reservation;


import com.codeWithProject.HotelServer.dto.ReservationResponseDto;

public interface ReservationService {

    ReservationResponseDto getAllReservations(int pageNumber);

    boolean changeReservationStatus(Long id, String status);
}
