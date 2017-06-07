import { Component, OnChanges, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  starWidth:number;
 @Input() rating:number;

 @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();
 
  constructor() { }

  ngOnChanges():void {
    this.starWidth=this.rating * 86/5;
  }

  onClick():void{
    this.ratingClicked.emit(`the rating ${this.rating}was clicked!`);
  }

}
