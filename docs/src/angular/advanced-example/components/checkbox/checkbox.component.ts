import { Component, HostBinding, HostListener, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less'],
  host: {
    class: 'checkbox',
    role: 'checkbox',
    tabindex: '0'
  },
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor {
  constructor(private sanitizer:DomSanitizer){}

  @Input() label:string;
  @Input() highlight:boolean;
  @Input() hover:boolean;

  value = false;

  @HostBinding('class.is-checked') get isChecked() { return this.value };
  @HostBinding('class.is-highlighted') get isHighlighted() { return this.highlight };
  @HostBinding('class.is-hovering') get isHovering() { return this.hover };

  @HostListener('click', ['$event']) onClick(e: MouseEvent) {
    e.stopPropagation()
    this.value = !this.value;
    this.onChange(this.value);
  }

  onChange = (_: any) => {}

  writeValue(val: boolean): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

}
