import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resultcard',
  templateUrl: './resultcard.component.html',
  styleUrls: ['./resultcard.component.scss'],
})
export class ResultcardComponent  implements OnInit {
  @Input() result: any;
  constructor() { }

  ngOnInit() {}

}
