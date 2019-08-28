import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'core-ui-text-input',
  template: `
  <input type="text" name="input" class={{classtouse}} placeholder="{{text}}" required>
  `,
  styles: [`
  .{
    text-align: left;
    font: Regular 16px/32px Source Sans Pro;
    letter-spacing: 0;
    color: #C7C7C7;
    opacity: 1;
  }
  .grey {
    text-align: center;
    font: Regular 14px/32px Source Sans Pro;
    width: 308px;
    height: 40px;
    letter-spacing: 0;
    color: #E7E7E7;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #E7E7E7;
    border-radius: 6px;
    opacity: 1;
  }
  .projek {
    text-align: center;
    font: Regular 14px/32px Source Sans Pro;
    width: 308px;
    height: 40px;
    letter-spacing: 0;
    color: #E7E7E7;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #0871CE;
    border-radius: 6px;
    opacity: 1;
  }
  .kecil {
    text-align: left;
    font: Regular 14px/32px Source Sans Pro;
    width: 318px;
    height: 40px;
    letter-spacing: 0;
    color: #E7E7E7;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #E7E7E7;
    border-radius: 6px;
    opacity: 1;
  }
  .besar {
    text-align: left;
    font: Regular 14px/32px Source Sans Pro;
    width: 318px;
    height: 120px;
    letter-spacing: 0;
    color: #E7E7E7;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #E7E7E7;
    border-radius: 6px;
    opacity: 1;
  }
  .user {
    text-align: left;
    font: Regular 14px/32px Source Sans Pro;
    width: 340px;
    height: 40px;
    letter-spacing: 0;
    color: #E7E7E7;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #E7E7E7;
    border-radius: 6px;
    opacity: 1;
  }
  .biru {
    text-align: left;
    font: Regular 14px/32px Source Sans Pro;
    width: 340px;
    height: 40px;
    letter-spacing: 0;
    color: #E7E7E7;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 7px #0871CE;
    border: 1px solid #0871CE;
    border-radius: 6px;
    opacity: 1;
  }
  .merah {
    text-align: left;
    font: Regular 14px/32px Source Sans Pro;
    width: 340px;
    height: 40px;
    letter-spacing: 0;
    color: #E7E7E7;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #D54F4F;
    border-radius: 6px;
    opacity: 1;
  }

  `],
  encapsulation: ViewEncapsulation.Native
})
export class TextInputComponent implements OnInit {

  @Input() text = '';
  @Input() classtouse = 'x';

  constructor() { }

  ngOnInit() {
  }

}
