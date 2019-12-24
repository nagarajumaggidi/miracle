import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-inner-header-nav',
  templateUrl: './inner-header-nav.component.html',
  styleUrls: ['./inner-header-nav.component.scss']
})
export class InnerHeaderNavComponent implements OnInit {
  // innerHeaderNavItems: any;
  role: any;
  innerHeaderNavItems = [
    {
      label: 'Browse Families',
      link: '/browse-family',
      img: 'assets/images/person-grey.svg',
      activeImg: 'assets/images/person-red.svg'
    },
    {
      label: 'My Matches',
      link: '/family-matches',
      img: 'assets/images/heart-grey.svg',
      activeImg: 'assets/images/heart-red.svg'
    },
    {
      label: 'Conversations',
      link: '/conversations',
      img: 'assets/images/chat-grey.svg',
      activeImg: 'assets/images/chat-red.svg'
    }
  ]
  constructor(private location:LocationStrategy) { 
    history.pushState(null, null, window.location.href);  
    this.location.onPopState(() => {
  history.pushState(null, null, window.location.href);
   });  
   this.role = localStorage.getItem('role');
  }

  // constructor() {
  //   this.role = localStorage.getItem('role');
  //  }

  ngOnInit() {

  }


}
