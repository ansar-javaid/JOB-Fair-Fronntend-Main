import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { DialogComponent } from './components/dialog/dialog.component';

import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProfileImageComponent,
    DialogComponent
  ],
  exports: [
    ProfileImageComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
