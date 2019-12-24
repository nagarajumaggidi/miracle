
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';


;

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit {
  chatRequest = false;
  id: any;
  browseFamilyById: any;
  familyInfobyId: any = {};
  organisation: any
  elf_id: any;
  public loading = false;
  role:any;
  family: any;
  activatedRoute: any;
  getelfprofileMatch: any;
  public elfmatchdata:any = []
  public elfdata = {};
  familydata: any;
  image: any = {};
  name : any = {}




  constructor(private httpservice: HttpService, private route: ActivatedRoute, private router: Router) { }
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
  chatRequestAccpet() {
    this.chatRequest = !this.chatRequest;
  }

  openLetterProfileViewPopup() {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    body.classList.add('letter-profile-view-popup-open'); html.classList.add('letter-profile-view-popup-open');
  }
  ngOnInit() { 
    this.loading = true
     this.getelfprofilematch();
     this.getelfProfile();

    this.route.paramMap.subscribe((params: ParamMap) => {

      var id = parseInt(params.get('id'));

      //console.log('id', this.route)
   
      if (!isNaN(id)) {
    
        this.getbrowseFamilyId(id);
      }

    });
    //console.log(localStorage.getItem('logindata'));

  }


  user: any;

  getbrowseFamilyId(id) {

    this.httpservice.getbrowseFamilyById(id).subscribe(response => {
      this.loading = false
      this.browseFamilyById = response;
      this.familyInfobyId = this.browseFamilyById.data.family_profile

      //console.log("familybyidd", this.familyInfobyId)
      //console.log('browseFamilyById', this.browseFamilyById)
    })

  }



  getdata: any;
  elfData: any;
  user_name: any;
  state: any;
  is_anonymous: boolean;
  anonymous: any;
  profile_bio: any;
  family_preference: any;
  username:any = {}
  statename:any ={}
  elf_email: any;
  img:any = {}


  getelfProfile(){
    this.httpservice.getelfData().subscribe(response => {
      this.loading = false;
    this.getdata = response;
    //console.log(response)
    this.elfData = this.getdata.data.elf_profile
    this.image=this.elfData.photo;
    //console.log(this.image)
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



//=================elf matches==========//

getelfprofilematch(){
  let id;
  this.id = localStorage.getItem('id')
  //console.log(this.id)
  //console.log(localStorage.getItem(('id')))
  this.httpservice.elfprofileMatch(this.id).subscribe(response => {
    this.loading = false;
    this.elfmatchdata = response.data.family_profiles;
    this.elfdata = response.data
    this.image = this.elfmatchdata[0]
    //console.log(this.image.photo)
    this.name = response.data.elf_name[0]
    //console.log(this.name)
    //console.log("data", this.elfmatchdata)
  })
}


}
