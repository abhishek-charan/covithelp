import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'map',
        loadChildren:()=>
        import('../pages/map/map.module').then(
          m => m.MapPageModule
        )
  },
      {
        path: 'notifications',
        loadChildren:()=>
        import('../pages/notifications/notifications.module').then(
          m => m.NotificationsPageModule
        )
    },
      {
        path: 'messages',
        loadChildren:()=>
        import('../pages/messages/messages.module').then(
          m => m.MessagesPageModule)
    },
    {
      path: 'settings',
      loadChildren:()=>
      import('../pages/settings/settings.module').then(
        m => m.SettingsPageModule)
     },
     {
       path: 'volunteer',
       loadChildren: () =>
        import('../pages/volunteer/volunteer.module').then(
          m => m.VolunteerPageModule)
     },
        {
          path: 'faq',
          loadChildren: () => import('../pages/faq/faq.module').then(
             m => m.FaqPageModule)
        },
        {
          path: 'help',
          loadChildren: () => import('../pages/help/help.module').then(
             m => m.HelpPageModule)
        },
        {
          path: 'terms',
          loadChildren: () => import('../pages/terms/terms.module').then(
            m => m.TermsPageModule)
        },
        {
          path: 'dod',
          loadChildren: () => import('../pages/dod/dod.module').then
          ( m => m.DodPageModule)
        },
        {
          path: 'quarantined',
          loadChildren: () => import('../pages/quarantined/quarantined.module').then
          ( m => m.QuarantinedPageModule)
        },
        {
          path: 'profile',
          loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
        }
    ]
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
