import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';
import { AlertifyService } from './../_services/alertify.service';

 @Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
   constructor(private authService: AuthService, private alertify: AlertifyService) { }
   ngOnInit() {
  }
   studentLogin() {
    this.authService.studentLogin(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error('Failed to login');
    });
  }
   studentLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
   studentLogout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
 }