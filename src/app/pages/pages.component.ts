import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

import { SessionService } from '../service/session.service';

@Component({
  selector: 'pages',
  templateUrl: "pages.component.html"
})
export class Pages {

  constructor(
    private router: Router,
    private sessionService: SessionService, 
    private _menuService: BaMenuService) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
    if (!this.sessionService.userSignedIn()) {
        this.router.navigate(['login'])
    }
      // this.SessionService.getSession()
      //     .subscribe(res => {
      //       console.log(res)
      //       localStorage.setItem("access_token", res.acccess_token);
      //       // this.sessionService.setToken(res)
      //       this.router.navigate(['pages/home'])
      //     })

  }
  
  public signout() {
    this.sessionService.signout();
  }
}
