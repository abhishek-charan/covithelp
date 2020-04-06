import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LoginService } from "src/app/providers/login/login.service";
import { CommonPopoverService } from "src/app/providers/common-popover/common-popover.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-common-header",
  templateUrl: "./common-header.component.html",
  styleUrls: ["./common-header.component.scss"]
})
export class CommonHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() isBackButtonActivate: boolean;
  @Input() isLogoutButtonActivate: boolean;
  @Input() isFullLogoActivate: boolean;
  @Input() isSmallLogoActivate: boolean;
  @Input() backPageLink: string;

  constructor(
    private loginService: LoginService,
    private commonPopover: CommonPopoverService,
    private router: Router
  ) {}

  ngOnInit() {}

  /**
   * Logout confirmation alert box
   */
  goToLogout() {
    this.commonPopover
      .alertPopOver("Do you really want to logout?", "Logout confirmation")
      .then(data => {
        if (data) {
          this.logout();
        }
      });
  }
  async logout() {
    await this.commonPopover.loaderPresent("Logging Out...");
    let message = "Successfully logged out";
    //Logout event
    this.loginService.logout().then(result => {
      this.router.navigate(["/login"]);
      this.commonPopover.toastPopOver(message);
      this.commonPopover.loaderDismiss();
    });
  }
}
