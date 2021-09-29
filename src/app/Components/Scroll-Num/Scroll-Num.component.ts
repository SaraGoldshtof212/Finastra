import { Component, Input, OnInit } from '@angular/core';

const BOOM_VALUE = 7;

@Component({
  selector: 'app-Scroll-Num',
  templateUrl: './Scroll-Num.component.html',
  styleUrls: ['./Scroll-Num.component.scss']
})

export class ScrollNumComponent implements OnInit {

  constructor() { }
  @Input()
  numList!: number[];

  ngOnInit(): void {}

  showBoom(num: number) {
    return !(num % BOOM_VALUE) || num.toString().includes(BOOM_VALUE.toString());
  }

}
