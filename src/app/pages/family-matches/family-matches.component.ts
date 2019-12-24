import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-family-matches',
  templateUrl: './family-matches.component.html',
  styleUrls: ['./family-matches.component.scss']
})
export class FamilyMatchesComponent implements OnInit {
  user: string;
  locations: string;
  image: string;
  getelfprofileMatch: any;
  id: any;
  elf_id: any;
  public elfmatchdata:any = []
  public elfdata : any;
  public loading = false;

  constructor(private httpservice: HttpService,private route: ActivatedRoute, private router: Router) {
    
   }

  ngOnInit() {
    this.loading = true;
   this.getelfprofilematch()
   this.getelfProfile();
  }

  getdata:any;
  elfData:any;
  elf_profile_id:any



getelfProfile(){
  this.httpservice.getelfData().subscribe(response => {
    this.loading = false;
  this.getdata = response;
 // console.log(response)
  this.elfData = this.getdata.data.elf_profile
  this.image=this.elfData.photo;
  this.user=this.elfData.user_name;
  this.locations=this.elfData.state;
  this.elf_id = this.elfData.id;
 // console.log(this.elfData.id)
   // console.log("getdataElf", this.elfData)
   localStorage.setItem('id', this.elfData.id);
  })
}

getelfprofilematch(){
  let id;
  this.id = localStorage.getItem('id')
 // console.log(this.id)
 // console.log(localStorage.getItem(('id')))
  this.httpservice.elfprofileMatch(this.id).subscribe(response => {
    this.loading = false;
    this.elfmatchdata = response.data.family_profiles;
    this.elfdata = response.data
   // console.log(this.elfdata)
   // console.log("data", this.elfmatchdata)
  })
}

}
