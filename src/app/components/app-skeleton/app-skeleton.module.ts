import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppSkeletonComponent } from './app-skeleton.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
  ],
  declarations: [AppSkeletonComponent],
  exports:[AppSkeletonComponent]
})
export class AppSkeletonModule {}
