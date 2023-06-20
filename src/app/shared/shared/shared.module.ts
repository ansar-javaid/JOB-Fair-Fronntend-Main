import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { DialogComponent } from './components/dialog/dialog.component';

import {MatDialogModule} from '@angular/material/dialog';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileImageComponent,
    DialogComponent,
    TableComponent
  ],
  exports: [
    ProfileImageComponent,
    DialogComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule
  ]
})
export class SharedModule { }
