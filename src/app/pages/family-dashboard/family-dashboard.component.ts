import { Component, OnInit, ɵConsole } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-family-dashboard',
  templateUrl: './family-dashboard.component.html',
  styleUrls: ['./family-dashboard.component.scss']
})
export class FamilyDashboardComponent implements OnInit {
  chatRequest = false;
  // If there no matches make "noFamilyMatchFound" flag 'true'
  noFamilyMatchFound = false;
  id: any;
  elf_id: any;
  public familymatchdata:any = []
  public familydata:any;
  //public loading = false;
  role:any;
  family: any;
  activatedRoute: any;
  user: void;
  public data ={}
  familyData: any;
  loading: boolean;
  elfmatchdata: any;
  elfdata: any;
  getdata: any;
  elfData: any;
  familydatas: any;



  
  constructor(private httpservice: HttpService,private route: ActivatedRoute, private router: Router) {}
  // matchedFamiles = [
  //   {
  //     img: 'assets/images/user01.png',
  //     status: true,
  //   },
  //   {
  //     img: 'assets/images/user02.png',
  //     status: false,
  //   },
  //   {
  //     img: 'assets/images/profile-dp.png',
  //     status: false,
  //   },
  //   {
  //     img: 'assets/images/user03.png',
  //     status: false,
  //   },
  //   {
  //     img: 'assets/images/user04.png',
  //     status: false,
  //   },
  //   {
  //     img: 'assets/images/user05.png',
  //     status: true,
  //   },
  //   {
  //     img: 'assets/images/user06.png',
  //     status: false,
  //   },
  // ];

  // conversationsList = [
  //   {
  //     img: 'assets/images/user07.png',
  //     username: 'Melany',
  //     time: '2:31 PM',
  //     chat: 'It\'s still sending.',
  //     status: true,
  //   },
  //   {
  //     img: 'assets/images/user08.png',
  //     username: 'Katelynn',
  //     time: '29 Jul',
  //     chat: 'I will upload the letter.',
  //     status: false,
  //   },
  //   {
  //     img: 'assets/images/user09.png',
  //     username: 'Marta',
  //     time: '29 Jul',
  //     chat: 'Lorem Ipsum is simply',
  //     status: true,
  //   },
  //   {
  //     img: 'assets/images/user07.png',
  //     username: 'Melany',
  //     time: '2:31 PM',
  //     chat: 'It\'s still sending.',
  //     status: true,
  //   },
  //   {
  //     img: 'assets/images/user08.png',
  //     username: 'Katelynn',
  //     time: '29 Jul',
  //     chat: 'I will upload the letter.',
  //     status: false,
  //   },
  //   {
  //     img: 'assets/images/user09.png',
  //     username: 'Marta',
  //     time: '29 Jul',
  //     chat: 'Lorem Ipsum is simply',
  //     status: true,
  //   },
  // ];
  ngOnInit() {
  
   //console.log(localStorage.getItem('logindata'));
    this.getfamilyprofileMatch()
    this.getelfProfile();
    this.getfamilyProfile();
  }
  chatRequestAccpet() {
    this.chatRequest = !this.chatRequest;
  }
  openFamilyProfileViewPopup() {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    body.classList.add('family-profile-view-popup-open'); html.classList.add('family-profile-view-popup-open');
  }
  openUnmatchFamilyPopup() {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    body.classList.add('unmatch-family-popup-open'); html.classList.add('unmatch-family-popup-open');
  }



//=================family matches==========//
total_matches:any;
  getfamilyprofileMatch(){
    //this.loading = true;
    let id;
    this.id = localStorage.getItem('logindata')
    JSON.parse(this.id).data.profile["id"]
    //console.log(JSON.parse(this.id).data.profile["id"])
    this.httpservice.familyprofileMatch(JSON.parse(this.id).data.profile["id"]).subscribe(response => {
      //this.loading = false;
      this.familymatchdata = response.data.elf_profiles;
      this.familydata = response.data
      this.total_matches=response.data.total_matches
     if( this.total_matches==0){
      //this.loading = false;
     }
      //console.log(this.familydata)
      //this.loading = false;
      //console.log("data", this.familymatchdata)
    })
    //this.loading = false;
  }

  getelfProfile(){
    this.httpservice.getelfData().subscribe(response => {
      this.loading = false;
    this.getdata = response;
    //console.log(response)
    this.elfData = this.getdata.data.elf_profile
   // console.log(this.elfData)
    this.elf_id = this.elfData.id;
    //console.log(this.elfData.id)
    // console.log("getdataElf", this.elfData)
     localStorage.setItem('id', this.elfData.id);
    })
  }


getfamilyProfile(){
  this.httpservice.getfamilyData().subscribe(response => {
  this.loading = false;
  this.familydatas = response.data.family_profile;
 // console.log(this.familydatas)
  })
}

}


