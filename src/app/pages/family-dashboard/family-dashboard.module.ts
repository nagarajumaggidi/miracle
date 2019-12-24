import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { FamilyDashboardComponent } from './family-dashboard.component';
import { NgxLoadingModule } from 'ngx-loading';
import { FamilyProfileViewPopupComponent } from './family-profile-view-popup/family-profile-view-popup.component';
import { from } from 'rxjs';
import { UnmatchFamilyComponent } from './unmatch-family/unmatch-family.component';
const routes: Routes = [
  { path: 'conversations', component: FamilyDashboardComponent },
];

@NgModule({
  declarations: [
    FamilyDashboardComponent,
    FamilyProfileViewPopupComponent,
    UnmatchFamilyComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    HttpClientModule,
    NgxLoadingModule,
  ],
  exports: [RouterModule],
})
export class FamilyDashboardModule { }
