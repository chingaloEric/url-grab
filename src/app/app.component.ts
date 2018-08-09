import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

import { Url } from './url.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: Url[] = [];
  //showUrl = false;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParamMap.subscribe((param: any) => {
    const data: Url = {
      orgUnit: '',
      period: '',
      intervention: ''
    }
     this.route.queryParamMap.subscribe((param: any) => {
      data.orgUnit = param.get('orgUnit');
      data.period = param.get('period');
      data.intervention = param.get('intervention');
    })
    this.url = [{
        orgUnit: data.orgUnit,
        period: data.period,
        intervention: data.intervention
    }];
    })
  }

  addRow(){
    this.route.queryParamMap.subscribe((param: any) => {
      const data: Url = {
        orgUnit: '',
        period: '',
        intervention: ''}
       this.route.queryParamMap.subscribe((param: any) => {
        data.orgUnit = param.get('orgUnit');
        data.period = param.get('period');
        data.intervention = param.get('intervention');
      })

    this.url.push(data)
    console.log(this.url[1].orgUnit)
    
  })
}

}