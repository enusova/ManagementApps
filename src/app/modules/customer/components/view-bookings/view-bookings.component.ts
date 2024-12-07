import { Component } from '@angular/core';
import {CustomerService} from '../../customerService/customer.service';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrl: './view-bookings.component.css'
})
export class ViewBookingsComponent {

  currentPage = 1;
  total : any;
  bookings: any;

  constructor(private customerService: CustomerService,private message: NzMessageService) {
    this.getBookings();
  }

  getBookings(){
    this.customerService.getMyBookings(this.currentPage -1).subscribe(res =>{
      console.log(res);

      this.bookings = res.reservationsDtoList;
      this.total = res.totalPages * 5;

    },error => {
      this.message.error(`${error.error}`,{nzDuration:5000});
      }

    );
  }


  pageIndexChange(value:any) {
    this.currentPage = value;
    this.getBookings();
  }

}
