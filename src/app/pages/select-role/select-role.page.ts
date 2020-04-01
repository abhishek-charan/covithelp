import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/providers/user/user.service";
import { NetworkConnectionService } from "src/app/providers/network-connection/network-connection.service";
import { CommonPopoverService } from "src/app/providers/common-popover/common-popover.service";
import { StorageProvider } from "src/app/providers/storage/storage.service";

@Component({
  selector: "app-select-role",
  templateUrl: "./select-role.page.html",
  styleUrls: ["./select-role.page.scss"]
})
export class SelectRolePage implements OnInit {
  selectedRole = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private networkConnection: NetworkConnectionService,
    private commonPopover: CommonPopoverService,
    private keystore: StorageProvider
  ) {}

  ngOnInit() {}
  selectRole(role) {
    this.selectedRole = role;
  }
  chooseRole() {
    if (!this.selectedRole) {
      return;
    }
    if (this.networkConnection.isOffline()) {
      return this.networkConnection.isConnectionMessage();
    }
    let data = {
      serviceRole: this.selectedRole
    };
    // set id
    let id = 112312;
    this.commonPopover.loaderPresent("Selecting Role");
    this.userService
      .selectRole(data)
      .then(res => {
        this.commonPopover.loaderDismiss();
        this.router.navigate(["/home"]);
        this.keystore.set("User", res);
      })
      .catch(err => {
        this.commonPopover.loaderDismiss();
      });
    // this.router.navigate(["/home"])
  }
}
