import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <material-datepicker
        [(date)]="date"
        (onSelect)="onSelect($event)"
        dateFormat="YYYY-MM-DD"
      ></material-datepicker>

      <button (click)="setToday()">today</button>
      <button (click)="clearDate()">reset</button>
      <hr>
      {{ date }}
      <p>
      Mirror(disabled, DD-MM-YYYY):
      <material-datepicker
        placeholder="nothing is selected"
        disabled="true"
        [(date)]="date"
        dateFormat="DD-MM-YYYY"
      ></material-datepicker>
      <button (click)="onClick()">
        Press me
      </button>
    `
})
export class AppComponent {
  date: Date;
  disabled: boolean;
  toggle: boolean = true;

  onClick() {
    this.toggle = !this.toggle;
  }

  onSelect(date: Date) {
    console.log("onSelect: ", date);
  }
  clearDate() {
    this.date = null;
  }
  setToday() {
    this.date = new Date();
  }
}
