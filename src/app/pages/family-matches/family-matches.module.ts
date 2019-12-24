import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxLoadingModule } from 'ngx-loading';
import { FamilyMatchesComponent } from './family-matches.component';
import { FamilyMatchProfileViewComponent } from './family-match-profile-view/family-match-profile-view.component';
import { FamilyMatchLetterViewPopupComponent } from './family-match-letter-view-popup/family-match-letter-view-popup.component';

const routes: Routes = [
  { path: '', component: FamilyMatchesComponent },
  { path: 'profile/:id', component: FamilyMatchProfileViewComponent },
];

@NgModule({
  declarations: [
    FamilyMatchesComponent,
    FamilyMatchProfileViewComponent,
    FamilyMatchLetterViewPopupComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    NgScrollbarModule,
    NgxLoadingModule,
  ],
  exports: [RouterModule],
})
export class FamilyMatchesModule { }
