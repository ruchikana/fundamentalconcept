import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRadiobutton]'
})
export class RadiobuttonDirective {
  constructor(private _el: ElementRef) { }
  @Input() defaultColor: string;
  @Input('appRadiobutton') highlightColor: string;
  @Input('underline') underline
  @Input('color') color
  @Input('tsize') tsize
  @Input('fstyle') fstyle

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'yellow');
    this._el.nativeElement.style.textDecoration='underline';
    this._el.nativeElement.style.backgroundColor=this.color;
    this._el.nativeElement.style.color='red';
    this.tsize = this.tsize || '20px';
    this._el.nativeElement.style.fontSize=this.tsize;
    this._el.nativeElement.style.fontStyle=this.fstyle;
    this.fstyle = this.fstyle || 'Italic';
    

  

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this._el.nativeElement.style.textDecoration=null;
    this._el.nativeElement.style.backgroundColor=null;
    this._el.nativeElement.style.color=null;
    this.tsize = this.tsize || '20px';
    this._el.nativeElement.style.fontSize=null;
    this.fstyle = this.fstyle || 'Italic';
    this._el.nativeElement.style.fontStyle=null;
  }

  private highlight(color: string) {
    this._el.nativeElement.style.backgroundColor = color;
  }
}

