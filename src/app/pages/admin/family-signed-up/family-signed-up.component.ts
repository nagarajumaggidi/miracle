import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-family-signed-up',
  templateUrl: './family-signed-up.component.html',
  styleUrls: ['./family-signed-up.component.scss']
})
export class FamilySignedUpComponent implements OnInit {
  p: number = 1;
  public loading = false;
  // signedUpFamilies = [
  //   {
  //     cyanStrip: 'NYC Together',
  //     name: 'Joe Melany signed Up',
  //     img: 'assets/images/fam01.jpg',
  //     location: 'California, New York'
  //   },
  //   {
  //     cyanStrip: 'NYC Together',
  //     name: 'Joe Melany signed Up',
  //     img: 'assets/images/fam01.jpg',
  //     location: 'California, New York'
  //   },
  //   {
  //     cyanStrip: 'NYC Together',
  //     name: 'Joe Melany signed Up',
  //     img: 'assets/images/fam01.jpg',
  //     location: 'California, New York'
  //   },
  //   {
  //     cyanStrip: 'NYC Together',
  //     name: 'Joe Melany signed Up',
  //     img: 'assets/images/fam01.jpg',
  //     location: 'California, New York'
  //   },
  //   {
  //     cyanStrip: 'NYC Together',
  //     name: 'Joe Melany signed Up',
  //     img: 'assets/images/fam01.jpg',
  //     location: 'California, New York'
  //   },
  // ];

  openFilterSidebar() {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    body.classList.add('filter-sidebar-open'); html.classList.add('filter-sidebar-open');
  }
  constructor(private httpservice: HttpService,private orderPipe: OrderPipe,private router:Router) { }

  ngOnInit() {
    this.loading = true;
    this.getnewFamily();
  }
  getdata:any;
  signedUpFamilies:any=[];
  order:any;
  getnewFamily() {
    this.httpservice.getnewfamilydata().subscribe(response => {
      this.loading = false;
      this.getdata = response;
       this.signedUpFamilies = this.getdata.data.family_profiles
    // console.log("signedUpFamilies", this.signedUpFamilies)
      // console.log(this.orderPipe.transform(this.signedUpFamilies,));

    })
  }


  
  getnewfamilysbyid(families) {
    this.router.navigate(['/admin/family-signed-up/profile', families.id]);
  }

  approveFamily(families){
let obj={}
obj['family_id']=families.id,
obj['status']="Approved"

this.httpservice.approvefamily(obj).subscribe(response => {
  this.getdata = response;
  //console.log(this.getdata)
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Approve family successfully',
    showConfirmButton: false,
    timer: 1000,
  })
  this.loading = false;
  this.getnewFamily();
})

this.loading = false;
this.getnewFamily();

  }

  declineFamily(families){
    let obj={}
    obj['family_id']=families.id,
    obj['status']="Declined"
    this.httpservice.declinefamily(obj).subscribe(response => {
      this.getdata = response;
      //console.log("Declined",obj)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'declined family successfully',
        showConfirmButton: false,
        timer: 1000
      })
      this.loading = false;
      this.getnewFamily();
    })
    this.loading = false;
    this.getnewFamily();
    
      }
    
}
