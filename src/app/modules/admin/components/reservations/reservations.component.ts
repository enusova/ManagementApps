import { Component } from '@angular/core';
import {AdminService} from '../../adminServices/admin.service';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {

  currentPage : any = 1;
  total:any;
  reservations:any;

  constructor(private adminService: AdminService,private message: NzMessageService) {
    this.getReservations();
  }


  getReservations(){
    this.adminService.getReservations(this.currentPage -1).subscribe(res =>{
      console.log(res);
      this.reservations = res.reservationsDtoList;
      this.total = res.totalPages * 5;
    });
  }


  pageIndexChange(value:any) {
    this.currentPage = value;
    this.getReservations();
  }

  changeReservationStatus(bookId:number, status: string) {
    this.adminService.changeReservationStatus(bookId, status).subscribe(res =>{

      this.message.success("Successfully changed reservation status", {nzDuration:5000});
      this.getReservations();

    },error => {
      this.message.error(`${error.error}`,{nzDuration:5000});
      }

    )
  }
}
