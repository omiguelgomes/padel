import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  protected profile = {
    name: 'John Doe',
    email: 'john_doe@gmail.com',
    birthtime: '1990-01-01',
    hand: 'right',
    ranking: 'beginner',
    description: 'I am a beginner player',
    avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
  };

  constructor() { }

  ngOnInit() {
  }

}
