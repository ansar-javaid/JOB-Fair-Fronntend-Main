import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sdcRoutes } from './shared/sdc-routes';


@NgModule({
  imports: [RouterModule.forRoot(sdcRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
