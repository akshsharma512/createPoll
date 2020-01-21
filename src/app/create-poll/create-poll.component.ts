import { Component, OnInit } from '@angular/core';
import { Poll } from '../models/poll';
import { Router } from '@angular/router';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  createPollData: Poll;

  constructor(private router: Router, private pollService: PollService) {
    this.createPollData = {
      option: '',
      subject: '',
      options: [],
      optionType: '',
      backgroundColor: '#e8eae5',
      textColor: '#e8eae5'
    };
  }

  ngOnInit() {
  }

  addPollOptionInArray() {
    if (this.createPollData.option === null || this.createPollData.option === undefined || this.createPollData.option === '') {
      // this.createPollData.option = '';
      alert('Please Enter Option For Poll');
      return 0;
    }
    if (this.createPollData.options.length === 4) {
      // this.createPollData.option = '';
      alert('More than 4 options are not allowed');
      return 0;
    }
    this.createPollData.options.push(this.createPollData.option);
    this.createPollData.option = '';
  }

  removePollOptionFromArray(index: number) {
    this.createPollData.options.splice(index, 1);
  }

  createPoll() {
    if (this.createPollData.options.length === 0) {
      // this.createPollData.option = '';
      alert('Please Add Options For Poll');
      return 0;
    }
    if (this.createPollData.options.length === 1) {
      // this.createPollData.option = '';
      alert('Please Add More Than 1 Option For Poll');
      return 0;
    }

    let temp: any = {};
    temp = this.createPollData;
    delete temp.option;
    this.pollService.savePollData(temp);
    this.router.navigate(['/view-poll']);
  }

}
