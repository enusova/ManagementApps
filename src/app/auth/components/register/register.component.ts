import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router,private message : NzMessageService) {}


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      name: [null,Validators.required]
    })
  }

  submitForm(){
    this.authService.register(this.registerForm.value).subscribe(res => {
      if (res.id != null){
        this.message.success("Successfully registered", {nzDuration:5000});
        this.router.navigateByUrl("/");
      }else {
        this.message.error(`${res.message}`,{nzDuration:5000});
      }
    })
  }

}
