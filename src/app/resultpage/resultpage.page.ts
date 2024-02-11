import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.page.html',
  styleUrls: ['./resultpage.page.scss'],
})
export class ResultpagePage implements OnInit {
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

  protected score!: any;
  protected teamA!: any;
  protected teamB!: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.score = this.friendResults[Number(this.route.snapshot.paramMap.get('id'))]['score'];
    this.teamA = [{name: 'Miguel Gomes', photo: 'https://www.w3schools.com/w3images/avatar2.png'}, {name: 'Ricardo Bento', photo: 'https://www.w3schools.com/w3images/avatar2.png'}]
    this.teamB = [{name: 'Vasco Palmeirim', photo: 'https://www.w3schools.com/w3images/avatar2.png'}, {name: 'Patricia Figueiredo', photo: 'https://www.w3schools.com/w3images/avatar2.png'}]
  }
}
