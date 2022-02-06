import { Directive, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: 'abc',
  // host: {
  //   // These are like ngClass class condition values
  //   '[class.visible]': 'isFocus', // Predicate1
  //   '[class.hidden]': '!isFocus'
  // }
})
export class RivetTokenDirective {
  @HostBinding('class') @Input() isFocus!: string;
}
