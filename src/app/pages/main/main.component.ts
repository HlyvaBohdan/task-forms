import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  value = '';
  firstInput:string;
  secondInput:string;
  thirdInput:string;
  fourthInput:string;
  fifthInput:string;
  constructor() { }

  ngOnInit(): void {
  }

}
