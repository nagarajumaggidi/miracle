import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-match-families-profile-view',
  templateUrl: './match-families-profile-view.component.html',
  styleUrls: ['./match-families-profile-view.component.scss']
})
export class MatchFamiliesProfileViewComponent implements OnInit {
  public loading = false;
  constructor(private httpservice: HttpService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(){
    this.loading = true;
    this.route.paramMap.subscribe((params: ParamMap) => {

      var id = parseInt(params.get('id'));

      //console.log('id', this.route)

      if (!isNaN(id)) {

        this.getmatchedfamilybyid(id);
      }

    });
  
  }


  approvedFamilys:any;
  approvedFamilysbyId:any;
  getmatchedfamilybyid(id) {

    this.httpservice.approvedfamilydatabyid(id).subscribe(response => {
      this.loading = false;
      this.approvedFamilys = response;
      this.approvedFamilysbyId = this.approvedFamilys.data.family_profile

      //console.log("matchedfamilys", this.approvedFamilysbyId)
     
    })

  }
  openLetterProfileViewPopup() {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    body.classList.add('letter-profile-view-popup-open'); html.classList.add('letter-profile-view-popup-open');
  }

  closeProfileDetailSidebar() {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    body.classList.remove('profile-detail-sidebar-open'); html.classList.remove('profile-detail-sidebar-open');
  }

}
