import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  countries:any[];
  authors:any[];
  constructor() { 
    
  }
  ngOnInit() {
    this.loadData();
    this.loadAuthors();
  }
  getStateColorByCountry(countryName){
    if(countryName==='India'){
      return 'red';
    }
    if(countryName==='USA'){
      return 'green';
    }
  }
  getColor(mode:string){
    let cssclass:any;
    switch(mode){
      case 'FIRST': 
      cssclass={
        first:true
      }
      break;
      case 'SECOND': 
      cssclass={
        second:true
      }
      break;
      case 'THIRD': 
      cssclass={
        third:true
      }
      break;
    }
    return cssclass;
  }
  loadData(){
    this.countries=[
      {
        countryname:'India',
        states:[
          {
            name:'New Delhi'
          },
          {
            name:'Mumbai'
          },
          {
            name:'Chennai'
          },
          {
            name:'Kolkata'
          }
        ]
      },
      {
        countryname:'USA',
        states:[
          {
            name:'Washington'
          },
          {
            name:'New York'
          },
          {
            name:'San Fransisco'
          },
          {
            name:'Los Angeles'
          }
        ]
      }
    ]
  }
  loadAuthors(){
  this.authors=[
    {
      name:'Anil Kumar',
      gender:'male',
      age:35
    },
    {
      name:'Ritika Kumari',
      gender:'female',
      age:27
    },
    {
      name:'Pankaj Verma',
      gender:'male',
      age:29
    },
    {
      name:'Sudha Singh',
      gender:'female',
      age:32
    },
  ]
  }
}
