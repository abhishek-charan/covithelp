import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Keyboard } from "@ionic-native/keyboard/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private keyboard: Keyboard
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
      this.statusBar.backgroundColorByHexString("#4dacdc");
      this.splashScreen.hide();
    });
  }
}
