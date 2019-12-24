import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  
  p:number = 1;
  s:number =1;
  
  public loading = false;
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
  // ];

  // signedUpFamilies = [
  //   {
  //     img: 'assets/images/user01.png',
  //     name: 'Joe Melany',
  //   },
  //   {
  //     img: 'assets/images/user02.png',
  //     name: 'Joe Melany',
  //   },
  //   {
  //     img: 'assets/images/user03.png',
  //     name: 'Joe Melany',
  //   },
  //   {
  //     img: 'assets/images/user04.png',
  //     name: 'Joe Melany',
  //   },
  //   {
  //     img: 'assets/images/user05.png',
  //     name: 'Joe Melany',
  //   },
  // ];

  matchedFamilies = [
    {
      img1: 'assets/images/user01.png',
      img2: 'assets/images/user02.png',
      name1: 'Joe Melany',
      name2: 'John Carter',
    },
    {
      img1: 'assets/images/user03.png',
      img2: 'assets/images/user04.png',
      name1: 'Joe Melany',
      name2: 'John Carter',
    },
    {
      img1: 'assets/images/user05.png',
      img2: 'assets/images/user06.png',
      name1: 'Joe Melany',
      name2: 'John Carter',
    },
    {
      img1: 'assets/images/user07.png',
      img2: 'assets/images/user08.png',
      name1: 'Joe Melany',
      name2: 'John Carter',
    },
    {
      img1: 'assets/images/user09.png',
      img2: 'assets/images/user01.png',
      name1: 'Joe Melany',
      name2: 'John Carter',
    },
  ]

  constructor(private httpservice: HttpService, private orderPipe: OrderPipe) { }
  length: any;
  ngOnInit() {
    this.loading = true;
    this.getnewFamily();
    this.getmatchedFamily();
    this.userAnalytics();
  }
  getdata: any;
  signedUpFamilies: any;
  image: any;
  name: any;
  order: any;
  getnewFamily() {
    this.httpservice.getnewfamilydata().subscribe(response => {
      this.loading = false;
      this.getdata = response;
      this.signedUpFamilies = this.getdata.data.family_profiles
      // console.log("getdataElf", this.getdata)
      // console.log("signedUpFamilies", this.signedUpFamilies)
      // console.log(this.orderPipe.transform(this.signedUpFamilies));

    })
  }


  getmatcheddata: any;
  matchedProfiles: any;
  getmatchedFamily() {
    this.httpservice.getmatcheddata().subscribe(response => {
      this.loading = false;
      this.getmatcheddata = response;
      this.matchedProfiles = this.getmatcheddata.data.family_profiles
      // console.log("matcheddata", this.getmatcheddata)
      // console.log(this.orderPipe.transform(this.matchedProfiles));

    })



  }


  userAnalyticsdata: any;
  total_family_count: any;
  total_elf_count: any;
  matched_family_count: any;
  userAnalytics() {
    this.httpservice.userAnalyticsgetdata().subscribe(response => {
      this.loading = false;
      this.userAnalyticsdata = response;
      this.total_family_count = this.userAnalyticsdata.data.total_family_count;
      this.total_elf_count = this.userAnalyticsdata.data.total_elf_count;
      this.matched_family_count = this.userAnalyticsdata.data.matched_family_count;

      // console.log("userAnalytics", this.userAnalyticsdata)


    })



  }

  approveFamily(families) {
    let obj = {}
    obj['family_id'] = families.id,
      obj['status'] = "Approved"

    this.httpservice.approvefamily(obj).subscribe(response => {
      this.getdata = response;
      location.reload();
      // console.log("Approved",obj)
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

  declineFamily(families) {
    let obj = {}
    obj['family_id'] = families.id,
      obj['status'] = "Declined"
    this.httpservice.declinefamily(obj).subscribe(response => {
      this.getdata = response;
      // console.log("Declined",obj)
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
