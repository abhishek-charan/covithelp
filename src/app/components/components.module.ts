import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlidesComponent } from "./slides/slides.component";
import { StartComponent } from "./start/start.component";
import { LogoComponent } from "./logo/logo.component";
import { IonicModule } from "@ionic/angular";
import { GoogleMapsComponent } from "./google-maps/google-maps.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppSkeletonComponent } from "./app-skeleton/app-skeleton.component";

@NgModule({
  declarations: [
    SlidesComponent,
    StartComponent,
    LogoComponent,
    GoogleMapsComponent,
    UserProfileComponent,
    AppSkeletonComponent
  ],
  exports: [
    SlidesComponent,
    StartComponent,
    LogoComponent,
    GoogleMapsComponent,
    UserProfileComponent,
    AppSkeletonComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule {}
