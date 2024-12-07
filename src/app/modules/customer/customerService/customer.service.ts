import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserStorageService} from '../../../auth/services/storage/user-storage.service';

const urlApi = "http://localhost:9020/";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  getRooms(pageNumber:number) : Observable<any> {
    return this.http.get(urlApi+`api/customer/rooms/${pageNumber}`,{
      headers: this.createAuthorisationHeader()
    });
  }


  bookRoom(bookingDto:any) : Observable<any> {
    return this.http.post(urlApi+`api/customer/book`, bookingDto,{
      headers: this.createAuthorisationHeader()
    });
  }


  getMyBookings(pageNumber:number) : Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(urlApi+`api/customer/bookings/${userId}/${pageNumber}`,{
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
