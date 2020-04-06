import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/providers/user/user.service";
import { NetworkConnectionService } from "src/app/providers/network-connection/network-connection.service";
import { CommonPopoverService } from "src/app/providers/common-popover/common-popover.service";
import { StorageProvider } from "src/app/providers/storage/storage.service";
import { constants } from 'src/app/constants/constants';

@Component({
  selector: "app-select-role",
  templateUrl: "./select-role.page.html",
  styleUrls: ["./select-role.page.scss"]
})
export class SelectRolePage implements OnInit {
  serviceRole = "";
  volunteer = constants.enums.roles.SERVICE_PROVIDER;
  distressed = constants.enums.roles.SERVICE_TAKER;
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
    this.serviceRole = role;
  }
  async chooseRole() {
    // if (!this.serviceRole) {
    //   return;
    // }
    // if (this.networkConnection.isOffline()) {
    //   return this.networkConnection.isConnectionMessage();
    // }
    // let data = {
    //   serviceRole: this.serviceRole
    // };
    // await this.commonPopover.loaderPresent("Selecting Role");
    // this.userService
    //   .selectRole(data)
    //   .then(res => {
    //     this.commonPopover.loaderDismiss();
    //     this.router.navigate(["/home"]);
    //     this.keystore.set("User", res);
    //   })
    //   .catch(err => {
    //     this.commonPopover.loaderDismiss();
    //   });
    this.router.navigate([
      "/setup-profile",
      { serviceRole: this.serviceRole }
    ]);
  }
}
