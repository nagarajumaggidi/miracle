import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elfs',
  templateUrl: './elfs.component.html',
  styleUrls: ['./elfs.component.scss']
})
export class ElfsComponent implements OnInit {
  public loading = false;
  searchValue: any;

  matchedFamilies = [
    {
      cyanStrip: 'NYC Together',
      name: 'Joe Melany',
      img: 'assets/images/fam01.jpg',
      location: 'California, New York',
    },
    {
      cyanStrip: 'NYC Together',
      name: 'Kate Katelynn',
      img: 'assets/images/fam02.jpg',
      location: 'California, New York',
    },
    {
      cyanStrip: 'NYC Together',
      name: 'Ashley Marta',
      img: 'assets/images/fam03.jpg',
      location: 'California, New York',
    },
    {
      cyanStrip: 'NYC Together',
      name: 'Esmeralda',
      img: 'assets/images/fam04.jpg',
      location: 'California, New York',
    },
    {
      cyanStrip: 'NYC Together',
      name: 'Valerie',
      img: 'assets/images/fam05.jpg',
      location: 'California, New York',
    },
    {
      cyanStrip: 'NYC Together',
      name: 'John Stones',
      img: 'assets/images/fam06.jpg',
      location: 'California, New York',
    },
  ];

  constructor(private httpservice: HttpService,private router:Router) { }

  ngOnInit() {
    this.loading = true;
    this.getelfprofiles();
   
  }
  getdata:any;
  elfProfiles:any;
  image:any;
  name:any;
  getelfprofiles() {
    this.httpservice.getelfprofilesinAdmin().subscribe(response => {
      this.loading = false;
      this.getdata = response;
       this.elfProfiles = this.getdata.data.elf_profiles
     
 
      //console.log("getdataElf", this.getdata)
      //console.log("elfProfiles", this.elfProfiles)

    })
  }
  
  elfProfilebyid(families) {
    this.router.navigate(['/admin/elf/profile', families.id]);
  }

  openFlaggedUserPopup() {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    body.classList.add('flagged-user-popup-open'); html.classList.add('flagged-user-popup-open');
  }

}
