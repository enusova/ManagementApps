package com.codeWithProject.HotelServer.dto;


import lombok.Data;

import java.util.List;

@Data
public class ReservationResponseDto {

    private int totalPages;

    private int pageNumber;

    private List<ReservationDto> reservationsDtoList;
}
