import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.scss'],
})
export class GamecardComponent  implements OnInit {
  @Input() game: any;
  constructor() { }
  ngOnInit() {}
}
