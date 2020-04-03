import { Component, ViewChild } from "@angular/core";

import { Platform, IonRouterOutlet } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { CommonPopoverService } from "./providers/common-popover/common-popover.service";
import { LoginService } from "./providers/login/login.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlet: IonRouterOutlet;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private keyboard: Keyboard,
    private commonPopover: CommonPopoverService,
    private loginService: LoginService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.keyboard.hideFormAccessoryBar(false);
      this.statusBar.styleDefault();
      // Let status bar overlay webview
      this.statusBar.overlaysWebView(false);
      // Set status bar to white
      this.statusBar.backgroundColorByHexString("#ed576b");
      this.splashScreen.hide();

      //Back button click
      this.platform.backButton.subscribe(() => {
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
          this.routerOutlet.pop();
        } else {
          return this.onBackButton();
        }
      });
    });
  }

  /**
   * Confirmation alaert to exit app on back button press
   * when no more page is present
   */
  onBackButton() {
    this.commonPopover
      .alertPopOver("Do you want to exit?", "Exit App")
      .then(data => {
        if (data) {
          navigator["app"].exitApp();
        }
      });
  }
}
