package com.codeWithProject.HotelServer.services.admin.rooms;

import com.codeWithProject.HotelServer.dto.RoomDto;
import com.codeWithProject.HotelServer.dto.RoomsResponseDto;

public interface RoomsService {

    boolean postRoom(RoomDto roomDto);

    RoomsResponseDto getAllRooms(int pageNumber);

    RoomDto getRoomById(Long id);

    boolean updateRoom(Long id,RoomDto roomDto);

    void deleteRoom(Long id);
}
