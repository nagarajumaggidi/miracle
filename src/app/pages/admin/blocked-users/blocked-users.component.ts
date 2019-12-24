import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocked-users',
  templateUrl: './blocked-users.component.html',
  styleUrls: ['./blocked-users.component.scss']
})
export class BlockedUsersComponent implements OnInit {
  p: number = 1;
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

  constructor() { }

  ngOnInit() {
  }

  openBlockedPopup() {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    body.classList.add('flagged-user-popup-open'); html.classList.add('flagged-user-popup-open');
  }

}
