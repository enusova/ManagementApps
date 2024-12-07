import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserStorageService} from '../../../auth/services/storage/user-storage.service';

const urlApi = 'http://localhost:9020/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  postRoomDetails(roomDto:any) : Observable<any> {
    return this.http.post(urlApi+"api/admin/room", roomDto,{
      headers: this.createAuthorisationHeader()
    });
  }



  updateRoomDetails(id:number,roomDto:any) : Observable<any> {
    return this.http.put(urlApi+`api/admin/room/${id}`, roomDto,{
      headers: this.createAuthorisationHeader()
    });
  }



  getRooms(pageNumber:number) : Observable<any> {
    return this.http.get(urlApi+`api/admin/rooms/${pageNumber}`,{
      headers: this.createAuthorisationHeader()
    });
  }


  getRoomById(id:number) : Observable<any> {
    return this.http.get(urlApi+`api/admin/room/${id}`,
      {headers: this.createAuthorisationHeader(),
      }
      );
  }



  deleteRoom(roomId:number) : Observable<any> {
    return this.http.delete(urlApi+`api/admin/room/${roomId}`,
      {headers: this.createAuthorisationHeader(),
      }
    );
  }



  getReservations(pageNumber:number) : Observable<any> {
    return this.http.get(urlApi+`api/admin/reservations/${pageNumber}`,{
      headers: this.createAuthorisationHeader()
    });
  }



  changeReservationStatus(reservationId:number,status:string) : Observable<any> {
    return this.http.get(urlApi+`api/admin/reservations/${reservationId}/${status}`,{
      headers: this.createAuthorisationHeader()
    });
  }




   createAuthorisationHeader() {
    let authHeaders = new HttpHeaders();
    return authHeaders.set("Authorization"
      , "Bearer " +
      UserStorageService.getToken());
  }
}
