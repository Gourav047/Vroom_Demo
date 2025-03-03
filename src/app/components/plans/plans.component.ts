import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  services_list:any[] = [
    {
      name:"Car Wash",
      short_summary: "Sample Text",
      long_summary:"Sample Text",
      plan_breakeout:[
        "plan 1",
        "plan 2",
        "plan 3"
      ]
    },{
      name:"Bike Wash",
      short_summary: "Sample Text",
      long_summary:"Sample Text",
      plan_breakeout:[
        "plan 1",
        "plan 2",
        "plan 3"
      ]
    },{
      name:"Service 3",
      short_summary: "Sample Text",
      long_summary:"Sample Text",
      plan_breakeout:[
        "plan 1",
        "plan 2",
        "plan 3"
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
