import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: 'games.page.html',
  styleUrls: ['games.scss']
})
export class GamesPage {
  availableGames = [
    { id: 0,  club: "Norte Padel",  time: "Thursday 15:30",  details: "More details here" },
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
  constructor() {}

}
