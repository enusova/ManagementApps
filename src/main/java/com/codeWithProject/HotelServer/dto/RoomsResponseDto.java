package com.codeWithProject.HotelServer.dto;


import lombok.Data;

import java.util.List;

@Data
public class RoomsResponseDto {

    private List<RoomDto> roomsDtoList;
    private int totalPages;
    private int pageNumber;
}
