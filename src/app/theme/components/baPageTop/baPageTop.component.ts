import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';

import { SessionService } from '../../../service/session.service';

import 'style-loader!./baPageTop.scss';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private sessionService: SessionService, private _state:GlobalState) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public signout() {
    this.sessionService.signout();
  }
}
