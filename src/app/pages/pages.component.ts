import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

import { SessionService } from '../service/session.service';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://akveo.com">Akveo</a> 2016</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
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
}
