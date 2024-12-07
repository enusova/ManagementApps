package com.codeWithProject.HotelServer.services.customer.room;

import com.codeWithProject.HotelServer.dto.RoomsResponseDto;

public interface RoomService {

    RoomsResponseDto getAvailableRooms(int pageNumber);
}
