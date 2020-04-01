import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  
    helpData: any[] = [
      {
        sno: "1",
        state: "Andhra Pradesh",
        helpline: "0866-2410978",
      },
      {
        sno: "2",
        state: "Arunachal Pradesh",
        helpline: "9436055743",
      },
      {
        sno: "3",
        state: "Assam",
        helpline: "6913347770",
      },
      {
        sno: "4",
        state: "Bihar",
        helpline: "104",
      },
      {
        sno: "5",
        state: "Chhattisgarh",
        helpline: "104",
      },
      {
        sno: "6",
        state: "Goa",
        helpline: 25000,
      },
      {
        sno: "7",
        state: "Gujarat",
        helpline: "104",
      },
      {
        sno: "8",
        state: "Haryana",
        helpline: "104",
      }
      ,
      {
        sno: "9",
        state: "Himachal Pradesh",
        helpline: "104",
      }
      ,
      {
        sno: "10",
        state: "Jharkhand",
        helpline: "104",
      }
      ,
      {
        sno: "11",
        state: "Karnataka",
        helpline: "104",
      }
      ,
      {
        sno: "12",
        state: "Kerala",
        helpline: "0471-2552056",
      }
      ,
      {
        sno: "13",
        state: "Madhya Pradesh",
        helpline: "104",
      }
      ,
      {
        sno: "14",
        state: "Maharashtra",
        helpline: "020-26127394",
      }
      ,
      {
        sno: "15",
        state: "Manipur",
        helpline: "3852411668",
      }
      ,
      {
        sno: "16",
        state: "Meghalaya",
        helpline: "108",
      }
      ,
      {
        sno: "17",
        state: "Mizoram",
        helpline: "102",
      }
      ,
      {
        sno: "18",
        state: "Nagaland",
        helpline: "7005539653",
      }
      ,
      {
        sno: "19",
        state: "Odisha",
        helpline: "9439994859",
      }
      ,
      {
        sno: "20",
        state: "Punjab",
        helpline: "104",
      }
      ,
      {
        sno: "21",
        state: "Rajasthan",
        helpline: "0141-2225624",
      }
      ,
      {
        sno: "22",
        state: "Sikkim",
        helpline: "104",
      }
      ,
      {
        sno: "23",
        state: "Tamil Nadu",
        helpline: "044-29510500",
      }
      ,
      {
        sno: "24",
        state: "Telangana",
        helpline: "104",
      }
      ,
      {
        sno: "25",
        state: "Tripura",
        helpline: "0381-2315879",
      }
      ,
      {
        sno: "26",
        state: "Uttarakhand",
        helpline: "104",
      }
      ,
      {
        sno: "27",
        state: "Uttar Pradesh",
        helpline: "18001805145",
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
