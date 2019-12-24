import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-matched-families',
  templateUrl: './matched-families.component.html',
  styleUrls: ['./matched-families.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatchedFamiliesComponent implements OnInit {
  public loading = false;
  searchValue :any
  p: number = 1;

  matchedFamilies = [
    {
      cyanStrip: 'NYC Together',
      name: 'Joe Melany',
      img: 'assets/images/fam01.jpg',
      location: 'California, New York',
      matched: true,
    },
    {
      cyanStrip: 'NYC Together',
      name: 'Kate Katelynn',
      img: 'assets/images/fam02.jpg',
      location: 'California, New York',
      matched: false,
    },
    {
      cyanStrip: 'NYC Together',
      name: 'Ashley Marta',
      img: 'assets/images/fam03.jpg',
      location: 'California, New York',
      matched: true,
    },
    {
      cyanStrip: 'NYC Together',
      name: 'Esmeralda',
      img: 'assets/images/fam04.jpg',
      location: 'California, New York',
      matched: false,
    },
    {
      cyanStrip: 'NYC Together',
      name: 'Valerie',
      img: 'assets/images/fam05.jpg',
      location: 'California, New York',
      matched: true,
    },
    {
      cyanStrip: 'NYC Together',
      name: 'John Stones',
      img: 'assets/images/fam06.jpg',
      location: 'California, New York',
      matched: false,
    },
  ];

  constructor(private httpservice: HttpService,private router:Router,private orderPipe: OrderPipe) { }

  ngOnInit() {
    this.loading = true;
this.approvedFamily();
this.declinedfamily();
//this.matchedFamilys();
  }


  getmatchedprofiles(families) {
    this.router.navigate(['/admin/matched-families/profile', families.id]);
  }


  getdata:any;

 approvedFamily() {
    this.httpservice.approvedfamilydata().subscribe(response => {
      this.loading = false;
      this.getdata = response;
       this.approvedFamilies = this.getdata.data.family_profiles
     
       this.array.push(this.approvedFamilies)
      //console.log("approvedfamilys", this.approvedFamilies)
     

    })
  }

  array:any=[]
  approvedFamilies:any;
  declinedfamilys:any;
  declinedfamily(){

    this.httpservice.declinedfamilydata().subscribe(response => {
      this.loading = false;
      this.getdata = response;
       this.declinedfamilys = this.getdata.data.family_profiles
      this.array.push(this.declinedfamilys)
 
    
      //console.log("declinedfamilydata", this.declinedfamilys)

    })

  }

  // matchedFamilysdata:any;
  // matchedFamilys(){

  //   this.httpservice.matchedfamilydata().subscribe(response => {
  //     this.loading = false;
  //     this.getdata = response;
  //      this.matchedFamilysdata = this.getdata.data.family_profiles
  //     this.array.push(this.matchedFamilysdata)
 
    
  //     //console.log("matched", this.matchedFamilysdata)

  //   })
  // }

  


  getmatcheddata:any;
  matchedProfiles:any;
  order:any;
  getmatchedFamily() {
    this.httpservice.getmatcheddata().subscribe(response => {
      this.loading = false;
      this.getmatcheddata = response;
       this.matchedProfiles = this.getmatcheddata.data.family_profiles
     
 
      //console.log("matcheddata", this.getmatcheddata)
      //console.log(this.orderPipe.transform(this.matchedProfiles, this.order));

    })


    
  }

}
