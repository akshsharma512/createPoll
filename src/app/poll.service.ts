import { Injectable } from '@angular/core';
import { Poll } from './models/poll';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  pollData: Poll;

  constructor() { }

  savePollData(data: any) {
    this.pollData = data;
    localStorage.setItem('pollData', this.pollData.toString());
  }

  getPollData() {
    if (this.pollData) {
      return this.pollData;
    } else {
      const pollData = localStorage.getItem('pollData');
      return JSON.stringify(pollData);
    }
  }
}
