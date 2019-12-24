import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocked-users-profile',
  templateUrl: './blocked-users-profile.component.html',
  styleUrls: ['./blocked-users-profile.component.scss']
})
export class BlockedUsersProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openLetterProfileViewPopup() {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    body.classList.add('letter-profile-view-popup-open'); html.classList.add('letter-profile-view-popup-open');
  }

}
