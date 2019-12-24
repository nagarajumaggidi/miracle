import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { ConversationsComponent } from './conversations.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { NgxLoadingModule } from 'ngx-loading'

const routes: Routes = [
  { path: '', component: ConversationsComponent,canActivate:[AuthGuard] },
];

@NgModule({
  declarations: [
    ConversationsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    HttpClientModule,
    NgxLoadingModule
    
  ],
  exports: [RouterModule],
})
export class ConversationsModule { }
