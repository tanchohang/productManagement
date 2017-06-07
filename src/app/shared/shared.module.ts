import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  
  ],
  declarations: [
    StarComponent
  ],
  exports:[
    FormsModule,
    CommonModule,
    StarComponent

  ]
})
export class SharedModule { }
