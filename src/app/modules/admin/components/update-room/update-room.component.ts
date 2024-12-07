import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';
import {AdminService} from '../../adminServices/admin.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrl: './update-room.component.css'
})
export class UpdateRoomComponent implements OnInit {


  constructor(private fb: FormBuilder,private router: Router,
              private message : NzMessageService,private adminService: AdminService,
                    private activatedRoute: ActivatedRoute) {

    this.updateRoomForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required]
    });


  }

  updateRoomForm!: FormGroup;

 id : any;



  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.getRoomById();
  }


  submitForm() {
    this.adminService.updateRoomDetails(this.id,this.updateRoomForm.value).subscribe(res => {

      this.message.success("Room updated successfully.",{nzDuration:5000});
      this.router.navigateByUrl("/admin/dashboard")

    },error => {
      this.message.error(`${error.error}`,{nzDuration: 5000});
      }

    )
  }





  getRoomById() {
    this.adminService.getRoomById(this.id).subscribe(res => {
    this.updateRoomForm.patchValue(res);

    },error => {
      this.message.error(`${error.error}`, {nzDuration: 5000});
      }
      )
  }
}
