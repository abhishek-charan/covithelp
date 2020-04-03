import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { AuthGuard } from "src/app/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: "",
        redirectTo: "map",
        pathMatch: "full"
      },
      {
        path: "map",
        loadChildren: () =>
          import("./map/map.module").then(m => m.MapPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("./notifications/notifications.module").then(
            m => m.NotificationsPageModule
          ),
        canActivate: [AuthGuard]
      },
      // {
      //   path: "messages",
      //   loadChildren: () =>
      //     import("../messages/messages.module").then(m => m.MessagesPageModule)
      // },
      {
        path: "settings",
        loadChildren: () =>
          import("./settings/settings.module").then(m => m.SettingsPageModule),
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
