import { Component, OnInit } from '@angular/core';
import { CoronaServiceService } from '../../services/corona-service.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  public data: any;
  constructor(public service: CoronaServiceService) { }

  ngOnInit() {

  }

  public getData() {
    this.service.getCompleteInfo().subscribe((data) => {
      console.log(data)
      this.data = data.data.summary.total
    });
  }


}
