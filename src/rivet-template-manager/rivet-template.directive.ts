import { AfterContentInit, ContentChild, Directive, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { RivetTokenDirective } from 'src/rivet-token/rivet-token.directive';

@Directive({
  selector: '[appRivetTemplate]'
})
export class RivetTemplateDirective implements OnChanges {

  @Input('appRivetTemplate') templateId = '';
  protected _classList: string = '';
  @Input() set classList(val: string) {
    this._classList = val;
  }
  get classList(): string {
    return this._classList;
  }

  @ContentChild(RivetTokenDirective)
  token!: RivetTokenDirective;

  constructor(public readonly template: TemplateRef<any>) { }

  ngOnChanges(simple: SimpleChanges): void {
    // console.log('44', this.classList);
    // if (simple['classList'] && this.token) {
    //   this.token.classList = this.classList;
    // }
  }


}
