import { Component, OnInit } from '@angular/core';
import { UserService} from "@services/user/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  protected id: number = 1;
  protected user!: any;

  protected createUser() {
    this.service.postUser();
  }
  constructor(private route: ActivatedRoute, private service: UserService) {}

  async ngOnInit() {
    this.user = await this.service.getUser(this.id);
  }
}
