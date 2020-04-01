import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  tabsList = [
    {
      tabName: "map",
      iconName: "map",
      label: "Map"
    },
    {
      tabName: "notifications",
      iconName: "notifications",
      label: "Notification"
    },
    {
      tabName: "settings",
      iconName: "settings",
      label: "Setting"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
