import { Component, OnInit } from '@angular/core';
import { UserRoleService } from 'src/app/services/userRole/user-role.service';
import { bounceInLeft } from 'ng-animate';
import { useAnimation, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss'],
  animations: [
    trigger('bounceInLeft', [transition(':enter', useAnimation(bounceInLeft, {
      params: { timing: 2 }
    }))])
  ]
})
export class PersonalAreaComponent implements OnInit {

  user: any;

  constructor(private service: UserRoleService) {
    this.service.getUser({
      nickName: 'Starkei',
      password: '111222'
    }).subscribe(user => this.user = user[0]);
  }

  ngOnInit() {
  }

}
