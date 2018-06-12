import { Component, OnInit, Input } from '@angular/core';


type Size = 'small' | 'normal' | 'large';
type Type = 'primary' | 'raised' | 'warning' | 'error';

@Component({
  selector: 'luv-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() size: Size = 'normal';
  @Input() type: Type;

  public typeStyle: any;

  constructor() {

  }

  ngOnInit() {
    const sizeConfig = {
      small: {},
      normal: {},
      large: {}
    };
    const typeConfig = {
      primary: {
        'border': '1px solid #C1C0B9',
      },
      raised: {
        'background-color': '#11CBD7',
        'color': 'white',
      },
      warning: {
        'background-color': '#F0D879',
        'color': 'white',
      },
      error: {
        'background-color': '#E7475E',
        'color': 'white',
      },
    };

    this.typeStyle = typeConfig[this.type];
  }
}
