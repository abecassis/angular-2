import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfirst',
  templateUrl: './myfirst.component.html',
  styleUrls: ['./myfirst.component.css']
})
export class MyfirstComponent implements OnInit {

myfirst='xxxxx';
likeCounter=0;


  constructor() { }
Counter(){
  this.likeCounter++;
}

CounterLess(){
  this.likeCounter--;
}



  ngOnInit() {
  }

}
