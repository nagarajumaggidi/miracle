
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { SendService } from 'src/app/services/send.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  public loading = false;

  user: string;
  locations: string;
  image: string;
  getelfprofileMatch: any;
  id: any;
  elf_id: any;
  public elfmatchdata:any = []
  public elfdata :any;



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


  editProfile = false;
  familydatas: any;
  familyid: any;
  role: string;

  constructor(private httpservice: HttpService, private send: SendService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.role = localStorage.getItem('role');

  }
  ngOnInit() {
    this.loading = true;
    this.route.paramMap.subscribe((params: ParamMap) => {

      var id = parseInt(params.get('id'));

      //console.log('id', this.route)

      if (!isNaN(id)) {

        this.getelfProfileid(id);
      }

    });

    this.getelfprofilematch()
    this.getelfProfile();
    this.getfamilyProfile();

    //this.pervious();

  }

  openLetterProfileViewPopup() {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    body.classList.add('letter-profile-view-popup-open'); html.classList.add('letter-profile-view-popup-open');
  }


  getdata: any;
  elfData: any;
  user_name: any;
  state: any;
  organisation: any;
  is_anonymous: boolean;
  anonymous: any;
  profile_bio: any;
  family_preference: any;
  
  username:any = {}
  statename:any ={}
  elf_email: any;



  getelfProfileid(id) {

    this.httpservice.getelfDatabyid(id).subscribe(response => {
      this.loading = false;
      this.getdata = response;

      this.elfData = this.getdata.data.elf_profile
      this.elf_email = this.elfData.email
      this.image = this.elfData.photo;
      this.user_name = this.elfData.user_name;
      this.profile_bio = this.elfData.profile_bio
      this.state = this.elfData.state;
      this.elf_id = this.elfData.user_id;
      this.id = this.elfData.id
      this.organisation = this.elfData.organisation
      this.is_anonymous = this.elfData.is_anonymous
      this.family_preference = this.elfData.family_preference
      if (this.is_anonymous == true) {
        this.anonymous = "yes"
      }
      else if (this.is_anonymous == false) {
        this.anonymous = "no"
      }
      //console.log("getdataElf", this.elfData)

    })

  }




  updateElf: any;
    //  this.myProfile.setValue({
    //    'userName':this.URLSearchParams,
    //     'last'
    //  })
  // pervious() {
  //   this.myProfile.controls['user_name'].patchValue(this.user)
  //   this.myProfile.controls['profile_bio'].patchValue(this.profile_bio)
  //   this.myProfile.controls['state'].patchValue(this.locations)
  //   this.myProfile.controls['organisation'].patchValue(this.organisation)
  //   this.myProfile.controls['is_anonymous'].patchValue(this.is_anonymous)
  //   this.myProfile.controls['family_preference'].patchValue(this.family_preference)
  //   this.myProfile.controls['elf_email'].patchValue(this.email)
  // }



  editProfileActive() {
    this.editProfile = !this.editProfile;

    //this.pervious();
  }


  nameRegEx = "^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-,.!?&*@$# ])*$";
  myProfile = new FormGroup({
    profile_bio: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(this.nameRegEx)]),
    user_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(this.nameRegEx)]),
    is_anonymous: new FormControl(''),
    family_preference: new FormControl(''),
    state: new FormControl(''),
    organisation: new FormControl("", [Validators.required]),
    elf_email: new FormControl("", [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[cominorgcc]{2,4}$')]),
  });

  updateElfprofile() {
    localStorage.setItem('organisationprofile', this.myProfile.get("organisation").value);
    let obj = {}
    obj['user_name'] = this.myProfile.get('user_name').value
    obj['is_anonymous'] = this.myProfile.get('is_anonymous').value;
    obj['family_preference'] = this.myProfile.get('family_preference').value;
    obj['state'] = this.myProfile.get('state').value;
    obj['organisation'] = localStorage.getItem('organisationprofile');
    obj['profile_bio'] = this.myProfile.get('profile_bio').value;
    obj['email'] = this.myProfile.get('elf_email').value
    //console.log(obj)
    this.httpservice.updateElf(obj, this.id).subscribe(response => {
      this.updateElf = response;
      //console.log("update", this.updateElf)


      if (this.updateElf['statusCode'] = 200) {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'ElfProfile has been updated successfully.',
          showConfirmButton: false,
          timer: 1000
        })

      }
      this.getelfProfileid(this.id)
    })
    this.getelfProfileid(this.id)
  };
  
  elf_profile_id:any



getelfProfile(){
  this.httpservice.getelfData().subscribe(response => {
    this.loading = false;
  this.getdata = response;
  //console.log(response)
  this.elfData = this.getdata.data.elf_profile
  this.image=this.elfData.photo;
  this.username=this.elfData.user_name;
  //console.log(this.username)
  this.statename=this.elfData.state;
  //console.log(this.statename)
  this.elf_id = this.elfData.id;
  //console.log(this.elfData.id)
    //console.log("getdataElf", this.elfData)
   localStorage.setItem('id', this.elfData.id);
  })
}


getfamilyProfile(){
  this.httpservice.getfamilyData().subscribe(response => {
  this.loading = false;
  this.familydatas = response.data.family_profile;
  this.familyid = this.familydatas.id
  //console.log(this.familyid)
  //console.log(this.familydatas)
  })
}


getelfprofilematch(){
  let id;
  this.id = localStorage.getItem('id')
  //console.log(this.id)
  //console.log(localStorage.getItem(('id')))
  this.httpservice.elfprofileMatch(this.id).subscribe(response => {
    this.loading = false;
    this.elfmatchdata = response.data.family_profiles;
    this.elfdata = response.data
    //console.log(this.elfdata)
    //console.log("data", this.elfmatchdata)
  })
}
}
