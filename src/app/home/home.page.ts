import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  friendResults = [
    { id: 0,  club: "Norte Padel",  score: [[6, 1], [1, 6], [6, 4]] },
    { id: 1,  club: "Norte Padel",  score: [[6, 5], [6, 2], [1, 6]] },
    { id: 2,  club: "Norte Padel",  score: [[6, 3], [1, 6], [0, 6]] },
    { id: 3,  club: "Norte Padel",  score: [[6, 4], [2, 6], [6, 3]] },
    { id: 4,  club: "Norte Padel",  score: [[6, 1], [1, 6], [6, 4]] },
    { id: 5,  club: "Norte Padel",  score: [[1, 6], [0, 6], [2, 6]] },
    { id: 6,  club: "Norte Padel",  score: [[6, 1], [1, 6], [6, 4]] },
    { id: 7,  club: "Norte Padel",  score: [[6, 3], [1, 6], [6, 4]] },
    { id: 8,  club: "Norte Padel",  score: [[3, 6], [2, 6], [6, 4]] },
    { id: 9,  club: "Norte Padel",  score: [[2, 6], [6, 2], [2, 6]] },
    { id: 10, club: "Norte Padel",  score: [[6, 3], [1, 6], [6, 4]] },
    { id: 11, club: "Norte Padel",  score: [[6, 2], [1, 6], [6, 4]] }
  ];

  constructor() { }

  ngOnInit() {
  }

}
