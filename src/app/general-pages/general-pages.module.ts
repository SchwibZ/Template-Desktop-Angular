import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { InformationPageComponent } from './information-page/information-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes : Routes = [
  { path: 'blank-page', component: BlankPageComponent },
  { path: 'information-page', component: InformationPageComponent }
]

@NgModule({
  declarations: [BlankPageComponent , InformationPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class GeneralPagesModule { }
