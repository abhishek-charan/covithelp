import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.page.html',
  styleUrls: ['./volunteer.page.scss'],
})
export class VolunteerPage implements OnInit {

  isIndeterminate:boolean;
  masterCheck:boolean;
  checkBoxList:any;

  constructor() {
    this.checkBoxList = [
      {
        value:"Food",
        isChecked:false
      },{
        value:"Clothing",
        isChecked:false
      },{
        value:"Shelter",
        isChecked:false
      },{
        value:"Medical",
        isChecked:false
      }
    ];
   }
   checkMaster() {
    setTimeout(()=>{
      this.checkBoxList.forEach((obj: { isChecked: boolean; }) => {
        obj.isChecked = this.masterCheck;
      });
    });
  }
 
  checkEvent() {
    const totalItems = this.checkBoxList.length;
    let checked = 0;
    this.checkBoxList.map((obj: { isChecked: any; }) => {
      if (obj.isChecked) checked++;
    });
    if (checked > 0 && checked < totalItems) {
      //If even one item is checked but not all
      this.isIndeterminate = true;
      this.masterCheck = false;
    } else if (checked == totalItems) {
      //If all are checked
      this.masterCheck = true;
      this.isIndeterminate = false;
    } else {
      //If none is checked
      this.isIndeterminate = false;
      this.masterCheck = false;
    }
  }
  ngOnInit() {
  }

}
