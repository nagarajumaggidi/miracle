import { Component, OnInit,ViewEncapsulation,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { SendService } from 'src/app/services/send.service';
import { OrderPipe } from 'ngx-order-pipe';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-browse-family',
  templateUrl: './browse-family.component.html',
  styleUrls: ['./browse-family.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BrowseFamilyComponent implements OnInit {


  public loading = false;
  familyInfobyId: any;
  overlay:boolean=false;
  sidebar:boolean=false;
  id: any;
  browseFamily: any;
  familyInfo: any=[];
  user: any;
  locations: any;
  image: any;
  getelfprofileMatch: any;
  public elfmatchdata:any = []
  public elfdata :any;
  p: number = 1;
  order:any;
  stateDefault :any
  public organisationsData = [
    { Name: 'No Affiliation' },
    { Name: 'Adoption is Love Fund' },
    { Name: 'Miracle Families' },
    { Name: 'New Alternatives' },
    { Name: 'NYC Together' },
    { Name: 'Original 22nd Street Letters' },
    { Name: 'Poverty Alleviation Charity' },
  ];
  public organisationsFields = { text: 'Name' };
  public organisationsWaterMark = 'Select organisation ';
  // public sorting: string = 'Ascending'; 
  public organisationsDefault = ['No Affiliation'];
  familyPreferences:any;
  organization:any;
  searchValue:any;
  location:any;
  public stateData = [
    'Anywhere',
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    " California",
    " Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    " Georgia",
    " Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    " Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    " Maryland",
    "Massachusett",
    "Michigan",
    " Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    " New Jersey",
    " New Mexico",
    " New York",
    "North Carolina",
    " North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    " Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    " West Virginia",
    "Wisconsin",
    " Wyoming"

  ];

 
  constructor(private httpservice: HttpService, private send: SendService, private http: HttpClient, private route: ActivatedRoute, private router: Router,private orderPipe: OrderPipe) {}


  matchedFamiles = [
    {
      img: 'assets/images/user01.png',
      status: true,
    },
    {
      img: 'assets/images/user02.png',
      status: false,
    },
    {
      img: 'assets/images/profile-dp.png',
      status: false,
    },
    {
      img: 'assets/images/user03.png',
      status: false,
    },
    {
      img: 'assets/images/user04.png',
      status: false,
    },
    {
      img: 'assets/images/user05.png',
      status: true,
    },
    {
      img: 'assets/images/user06.png',
      status: false,
    },
  ];

  conversationsList = [
    {
      img: 'assets/images/user07.png',
      username: 'Melany',
      time: '2:31 PM',
      chat: 'It\'s still sending.',
      status: true,
    },
    {
      img: 'assets/images/user08.png',
      username: 'Katelynn',
      time: '29 Jul',
      chat: 'I will upload the letter.',
      status: false,
    },
    {
      img: 'assets/images/user09.png',
      username: 'Marta',
      time: '29 Jul',
      chat: 'Lorem Ipsum is simply',
      status: true,
    },
  ];

  toggleShortlisted(refMatch) {
    refMatch.shortlisted = !refMatch.shortlisted;
  }

  openMatchFamilyPopup(user) {
    this.router.navigate(['/browse-family/profile', user.id]);
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    body.classList.add('family-match-popup-open'); html.classList.add('family-match-popup-open');
  
  }


  getdata: any;
  elfData: any;
  getelfProfile() {
    this.httpservice.getelfData().subscribe(response => {
      setTimeout(()=>{  
        this.loading = false;
   }, 3000);
      this.getdata = response;
      this.elfData = this.getdata.data.elf_profile
      this.image = this.elfData.photo;
      this.user = this.elfData.user_name;
      this.locations = this.elfData.state;
      this.elf_id = this.elfData.user_id;
      this.elf_id = this.elfData.id;
      //console.log("getdataElf", this.elfData)
      localStorage.setItem('id', this.elfData.id);
    })
  }

  openFilterSidebar() {
    // const body = document.getElementsByTagName('body')[0];
    // // const html = document.getElementsByTagName('html')[0];
    // body.classList.add('filter-sidebar-open'); 
    // // html.classList.add('filter-sidebar-open');
     this.overlay=true;
     this.sidebar=true;

  }

  closeFilterSidebar(){
     this.overlay=false;
     this.sidebar=false;
  }

  getbrowseFamilyId(user) {
    this.router.navigate(['/browse-family/profile', user.id]);
  }
  getbrowseFamily() {
    this.httpservice.getbrowseFamily().subscribe(response => {
      setTimeout(()=>{  
        this.loading = false;
    }, 3000);
      this.browseFamily = response;
     // console.log(this.browseFamily);
      this.familyInfo = this.browseFamily.data.family_profiles
     // console.log(this.familyInfo);
      this.state = this.familyInfo.state
      //console.log("family browse", this.browseFamily)
      //console.log("family", this.familyInfo)
    })
  }

  state: any;
  elf_id: any;
  matchFamily: any;
  matchwithFamily() {
    let data = {}
    data['elf_profile_id'] = this.elf_id;
    data['family_profile_id'] = this.familyInfobyId.id;
    this.httpservice.matchFamily(data).subscribe(response => {
      this.loading = false
      this.matchFamily = response;
      //console.log(this.matchFamily)
    })
  }
  
  searchValues: any;
  onSearchChange(searchValue: string): void {
    //console.log("searchValue", searchValue);
    // this.searchValue = elf_profile_id
  }

  // serchbyState: any;
  // searchFilter(searchValue) {
  //   this.httpservice.serchbyState(searchValue).subscribe(response => {
  //     this.loading = false
  //     this.browseFamily = response;
  //     this.familyInfo = this.browseFamily.data.family_profiles
  //     //console.log("searchData", this.familyInfo)
  //   })
  // }

  getelfprofilematch(){
    let id;
    this.id = localStorage.getItem('id')
    //console.log(this.id)
    //console.log(localStorage.getItem(('id')))
    this.httpservice.elfprofileMatch(this.id).subscribe(response => {
      // location.reload();
      this.loading = false;
      this.elfmatchdata = response.data.family_profiles;
      this.elfdata = response.data
      //console.log(this.elfdata)
      //console.log("data", this.elfmatchdata)
    })
  }

  applyChanges(familyPreferences,organization,location){
    let filter_params={family_prefernces:familyPreferences,organization:organization,location:location};
    this.httpservice.filterbrowseFamily(filter_params).subscribe(response => {
    this.browseFamily = response;
    this.overlay=false;
    this.sidebar=false;
    this.familyInfo = this.browseFamily.data.family_profiles;
    }) 
  }

  ngOnInit() {

    history.pushState(null, null, location.href);
    window.onpopstate = function (event) {
      history.go(0);
    };

    this.loading = true;
    this.getbrowseFamily();
    this.getelfprofilematch();
  
    this.getelfProfile();
    this.getelfprofilematch();
    this.getbrowseFamily();
    //this.matchwithFamily();
    //this.searchFilter(this.searchValue);

  }


}
