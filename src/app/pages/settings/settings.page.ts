import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  profile(){

    this.router.navigate(['/home/profile'])
      }

      faq(){

        this.router.navigate(['/home/faq'])
          }    
          terms(){

    this.router.navigate(['/home/terms'])
          } 
   help(){

    this.router.navigate(['/home/help'])
          } 
}
