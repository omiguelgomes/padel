import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gamepage',
  templateUrl: './gamepage.page.html',
  styleUrls: ['./gamepage.page.scss'],
})
export class GamepagePage implements OnInit {
  availableGames = [
    { id: 0,  club: "Norte Padel",  time: "Thursday 15:30",  details: "More details here" },
    { id: 1,  club: "Norte Padel",  time: "Friday 18:30",    details: "More details here" },
    { id: 2,  club: "Norte Padel",  time: "Thursday 11:00",  details: "Different details..." },
    { id: 3,  club: "Norte Padel",  time: "Wednesday 15:00", details: "Different details..." },
    { id: 4,  club: "Norte Padel",  time: "Thursday 15:00",  details: "Different details..." },
    { id: 5,  club: "Norte Padel",  time: "Thursday 12:30",  details: "Different details..." },
    { id: 6,  club: "Norte Padel",  time: "Monday 15:00",    details: "Different details..." },
    { id: 7,  club: "Norte Padel",  time: "Thursday 15:00",  details: "Different details..." },
    { id: 8,  club: "Norte Padel",  time: "Thursday 10:00",  details: "Different details..." },
    { id: 9,  club: "Norte Padel",  time: "Friday 15:30",    details: "Different details..." },
    { id: 10, club: "Norte Padel",  time: "Thursday 11:00",  details: "Different details..." },
    { id: 11, club: "Norte Padel",  time: "Saturday 09:00",  details: "Different details..." }
  ];

  protected game!: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.game = this.availableGames[Number(this.route.snapshot.paramMap.get('id'))];
  }

}
