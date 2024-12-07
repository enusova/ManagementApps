import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';
import {AdminService} from '../../adminServices/admin.service';

@Component({
  selector: 'app-postroom',
  templateUrl: './post-room.component.html',
  styleUrl: './post-room.component.css'
})
export class PostRoomComponent {

  roomDetailsForm!: FormGroup;


  constructor(private fb: FormBuilder,private router: Router,
              private message : NzMessageService,private adminService: AdminService) {

    this.roomDetailsForm = this.fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        price: ['', Validators.required]
    })
  }


  submitForm() {
    this.adminService.postRoomDetails(this.roomDetailsForm.value).subscribe(res => {
      this.message.success("Room details added successfully.",{nzDuration:5000});
      this.router.navigateByUrl("/admin/dashboard")

    }, error => {
      this.message.error(
        `${error.error}`,
        {nzDuration: 5000}
      )
      }

    )
  }
}
