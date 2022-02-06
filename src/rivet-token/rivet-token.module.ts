import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RivetTokenDirective } from './rivet-token.directive';



@NgModule({
  declarations: [
    RivetTokenDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RivetTokenDirective
  ]
})
export class RivetTokenModule { }
