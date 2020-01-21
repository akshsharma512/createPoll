import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-view-poll',
  templateUrl: './view-poll.component.html',
  styleUrls: ['./view-poll.component.css']
})
export class ViewPollComponent implements OnInit {

  viewPollData: any;
  pollAnswerData: any;

  constructor(private  router: Router, private pollService: PollService) {
    this.viewPollData = {};
    this.pollAnswerData = {
      radio: '',
      checkbox: []
    };
  }

  ngOnInit() {
    this.getPollData();
  }

  getPollData() {
    this.viewPollData = this.pollService.getPollData();
    console.log('poll data', this.viewPollData);
    // this.setPollView();
  }

  setPollView() {
    document.getElementById('pollBox').style.backgroundColor = this.viewPollData.backgroundColor;
    document.getElementById('pollBox').style.color = this.viewPollData.textColor;
  }
}
