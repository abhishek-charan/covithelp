import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ProfilePageRoutingModule } from "./profile-routing.module";

import { ProfilePage } from "./profile.page";
import { CommonHeaderModule } from "src/app/components/common-header/common-header.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    CommonHeaderModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
