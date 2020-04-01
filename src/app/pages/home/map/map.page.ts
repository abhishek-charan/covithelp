import { Component, OnInit } from "@angular/core";
import { StorageProvider } from "src/app/providers/storage/storage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"]
})
export class MapPage implements OnInit {
  title = "Map";
  constructor(private keystore: StorageProvider, private router: Router) {}

  ngOnInit() {
    this.checkIfRoleSelected();
  }

  /**
   * Check if role selected or not
   */
  checkIfRoleSelected() {
    this.keystore.get("User").then(data => {
      if (!data.isServiceRoleSelected) {
        // navigate to select role screen
        this.router.navigate(["/select-role"]);
      }
    });
  }
}
