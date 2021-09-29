import { Component, OnInit } from '@angular/core';
import { range } from 'lodash';

@Component({
  selector: 'app-TestBoom',
  templateUrl: './TestBoom.component.html',
  styleUrls: ['./TestBoom.component.scss']
})

export class TestBoomComponent implements OnInit {

  constructor() { }
  list: number[] = [];
  listToDisplay: number[] = [];
  inputNum!: number;
  searchNum!: number;
  index: number = 0;
  intervalValue!: any;

  ngOnInit(): void { }

  resetList() {
    this.listToDisplay = [];
    this.list = range(1, this.inputNum + 1);
  }

  onGo() {
    this.resetList();
    this.index = 0;
    this.getArrayValues();
  }

  onSearch() {
    this.resetList();
    if (this.searchNum !== null)
      this.list = this.list.filter(num => (num.toString().includes(this.searchNum.toString())));
    this.index = 0;
    this.getArrayValues();
  }

  getArrayValues() {
    clearInterval(this.intervalValue);
    this.intervalValue = setInterval(() => {
      if (this.index === this.list.length) {
        clearInterval(this.intervalValue);
        return;
      }
      this.listToDisplay.push(this.list[this.index]);
      this.index++;
    }, 500);
  }
}
