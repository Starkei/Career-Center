import { Component, OnInit } from '@angular/core';
import { Select } from 'src/app/animations/select';
import { UserRoleService } from 'src/app/services/userRole/user-role.service';
import { rubberBand } from 'ng-animate';
import { useAnimation, trigger, transition } from '@angular/animations';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [Select,
    trigger('rubberBand', [
      transition('on <=> in', useAnimation(rubberBand, {
        params: { timing: 1 }
      }))
    ])
  ]
})
export class UserProfileComponent implements OnInit {

  user: any;

  hover: boolean = false;
  isClicked: boolean = false;

  links = [
    {path: 'personalArea', title: 'Personal area'},
    {path: 'personalArea', title: 'Logout'}
  ]

  constructor(private service: UserRoleService) {
    this.service.getUser({
      nickName: 'Starkei',
      password: '111222'
    }).subscribe(user => this.user = user[0]);
  }

  ngOnInit() {
    this.isClicked = false;
  }

  Scale(){
    this.hover = !this.hover;
  }

}
