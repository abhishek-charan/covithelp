import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-common-header",
  templateUrl: "./common-header.component.html",
  styleUrls: ["./common-header.component.scss"]
})
export class CommonHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() isBackButtonActivate: boolean;
  @Input() backPageLink: string;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
}
