import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-four-lehr',
  templateUrl: './step-four-lehr.component.html',
  styleUrls: ['./step-four-lehr.component.scss']
})
export class StepfourLehrComponent implements OnInit {

  constructor(public commonService: CommonService,) { }

  ngOnInit(): void {
  }

  onNext() {

    this.commonService.msStep = 3
    localStorage.setItem('lehrStepFourData4', JSON.stringify(this.commonService.lehrStepFourData4))
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))
    console.log("lehrStepFourData4", this.commonService.lehrStepFourData4)
  }

  onBack() {
    this.commonService.msStep = 1
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))
  }
}
