import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';
import {UserStorageService} from '../../services/storage/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private authService: AuthService,private fb: FormBuilder,
              private router: Router, private message : NzMessageService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }


  submitForm(){
    this.authService.login(this.loginForm.value).subscribe(res => {
      console.log(res);
      this.message.success("Successfully logged in", {nzDuration:5000});

      if (res.userId != null){
        const user = {
          id: res.userId,
          role: res.userRole
        }

        UserStorageService.saveUser(user);
        UserStorageService.saveToken(res.jwt);


        if (UserStorageService.isAdminLoggedIn()){
            this.router.navigateByUrl('/admin/dashboard');
        }else if (UserStorageService.isCustomerLoggedIn()){
          this.router.navigateByUrl('/customer/rooms');
        }

      }

    },error => {
        this.message.error("Bad credentials",{nzDuration:5000});
      }

    )
  }



}
