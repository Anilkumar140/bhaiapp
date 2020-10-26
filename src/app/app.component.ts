import { Component, Input } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { RouterModule } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Daily Deals';
  @Input()
  inputdata:any;
  isCollapsed = false;
  nickname:any;
  picture:any;
  constructor(public authService: AuthService) { }


getDate(){
this.authService.otpAuth();
this.nickname=localStorage.getItem('nickname');
this.picture=localStorage.getItem('picture');
}

}