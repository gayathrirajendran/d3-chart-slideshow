import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RivetTemplateDirective } from './rivet-template.directive';
import { RivetTokenModule } from 'src/rivet-token/rivet-token.module';



@NgModule({
  declarations: [
    RivetTemplateDirective
  ],
  imports: [
    CommonModule,
    RivetTokenModule
  ],
  exports: [
    RivetTemplateDirective
  ]
})
export class RivetTemplateManagerModule { }
