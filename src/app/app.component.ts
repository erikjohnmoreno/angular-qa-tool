import { Component, ViewContainerRef } from '@angular/core';

import { GlobalState } from './global.state';
import { SessionService } from './service/session.service';
// import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
// import { BaThemeConfig } from './theme/theme.config';
// import { layoutPaths } from './theme/theme.constants';

// import 'style-loader!./app.scss';
// import 'style-loader!./theme/initial.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  templateUrl: "app.component.html"
  // template: `
  //   <router-outlet></router-outlet>
  // `
})
export class App {

  // isMenuCollapsed: boolean = false;

  // constructor(private _state: GlobalState,
  //             private _imageLoader: BaImageLoaderService,
  //             private _spinner: BaThemeSpinner,
  //             private viewContainerRef: ViewContainerRef,
  //             private themeConfig: BaThemeConfig) {

  //   themeConfig.config();

  //   this._loadImages();

  //   this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
  //     this.isMenuCollapsed = isCollapsed;
  //   });
  // }

  // public ngAfterViewInit(): void {
  //   // hide spinner once all loaders are completed
  //   BaThemePreloader.load().then((values) => {
  //     this._spinner.hide();
  //   });
  // }

  // private _loadImages(): void {
  //   // register some loaders
  //   BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  // }

  constructor(private sessionService: SessionService) {}

  public signout() {
    this.sessionService.signout();
  }
}
