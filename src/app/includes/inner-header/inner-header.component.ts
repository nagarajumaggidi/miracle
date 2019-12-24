import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inner-header',
  templateUrl: './inner-header.component.html',
  styleUrls: ['./inner-header.component.scss']
})
export class InnerHeaderComponent implements OnInit {
  public show:boolean = false;
  dropdownVisible = false;
  user: string;
  image: string;
  familyData: any;
  elfmatchdata: any;
  elfdata: Array<any> =[];
  loading: boolean;
  familydatas: Array<any> =[];
  role: string;
  familyid: any;
  admindata = {}
  name = {}
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;

  }
  constructor( private route: ActivatedRoute, private router: Router,private routerNavigate: Router, private authService: AuthService, private httpservice: HttpService) {
    this.role = localStorage.getItem('role');
  }

  ngOnInit() {
    this.admin_detail();
    this.getelfProfile(); 
    this.getelfprofilematch()
     this.getfamilyProfile();
     //console.log( localStorage.getItem('userinformation'));
    this.route.paramMap.subscribe((params: ParamMap) => {

      var id = parseInt(params.get('id'));

      //console.log('id', this.route)

      if (!isNaN(id)) {
      }

    });
  }

  getdata: any;
  elfData: Array<any> =[];
  id:any;

  getelfProfile() {
    //debugger;
    // this.httpservice.getelfData().subscribe(response => {
    //   this.getdata = response;
    //   this.elfData = this.getdata.data.elf_profile
    //   this.image = this.elfData.photo;
    //   this.user = this.elfData.user_name;
    //   this.id=this.elfData.id
    //   //console.log("getdata", this.elfData)


    this.httpservice.getelfData().subscribe(response => {
      
      console.log(response);
      this.getdata = response;
      this.elfData = this.getdata.data.elf_profile;
     // debugger;
      if(this.elfData.length!=0){
        this.image = this.getdata.data.elf_profile.photo;
        this.user = this.getdata.data.elf_profile.user_name;
        this.id = this.getdata.data.elf_profile.id;
      }
      //console.log("getdata", this.elfData)
    })
  }

  //======================elf-detail=================================//


  getelfprofilematch(){
   // debugger;
    this.id = localStorage.getItem('familyid')
    //console.log(this.id)
    //console.log(localStorage.getItem(('id')))
    this.httpservice.elfprofileMatch(this.id).subscribe(response => {
      this.elfmatchdata = response.data.family_profiles;
      this.elfdata = response.data;
      //console.log(this.elfdata)
      //console.log("data", this.elfmatchdata)
    })
  }


  //======================family-detail=================================//


  getfamilyProfile(){
    this.httpservice.getfamilyData().subscribe(response => {
    this.loading = false;
    
    this.familydatas = response.data.family_profile;
    if(this.familydatas.length!=0){

    this.familyid = response.data.family_profile.id
    //console.log(this.familyid)
    localStorage.setItem('familyid', this.familyid);
    //console.log(this.familydatas)
    }
    });
  }

  myprofile(id) {
    //console.log(this.id)
    //console.log(localStorage.getItem('familyid'));
    this.familyid = localStorage.getItem('familyid')
    //console.log(this.familyid)
    if( localStorage.getItem('role')=='elf'){
      this.router.navigate(['/my-profile', this.id]);
      }
      if( localStorage.getItem('role')=='family'){
        this.router.navigate(['/my-profile',  this.familyid]);
    }

  }

admin_detail(){
  //console.log( localStorage.getItem('userinformation'));
  var user_information = localStorage.getItem('userinformation')
  //console.log(user_information)
  this.name = JSON.parse(user_information).data.profile["name"]
  //console.log(this.name)
}


  logout: any;
  data: any;

  logoutAction() {
    this.httpservice.logoutElf(this.data).subscribe((data: any) => {
      this.logout = data;

      //console.log(this.logout);


      if (this.logout['statusCode'] == 200) {
        if(localStorage.getItem('role')=='elf'){
        this.routerNavigate.navigate(['/login/elf'])
        }
        if( localStorage.getItem('role')=='admin'){
          this.routerNavigate.navigate(['/login/admin'])
          }
          if( localStorage.getItem('role')=='family'){
            this.routerNavigate.navigate(['/login/family'])
          }

        localStorage.clear();
        sessionStorage.clear();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logout Successful',
          showConfirmButton: false,
          timer: 1000
        })

        return true;

      }

    })

  }




}
