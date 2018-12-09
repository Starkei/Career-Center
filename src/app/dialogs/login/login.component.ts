import { Component, OnInit } from '@angular/core';
import { UserRoleService } from 'src/app/services/userRole/user-role.service';
import { rubberBand } from 'ng-animate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user: any;
  nickName: string = '';
  password: string = '';

  constructor(private service: UserRoleService) {}

  ngOnInit() {
  }

  login(){
    this.service.getUser({
      nickName: this.nickName,
      password: this.password
    }).subscribe(
      users => {
        this.user = users[0];
        this.service.currentUser = this.user
      });
  }

}
