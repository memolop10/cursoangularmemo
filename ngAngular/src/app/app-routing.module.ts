import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent}from './home/home.component';
import{NosotrosComponent}from './nosotros/nosotros.component';
import{ContactoComponent}from './contacto/contacto.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'contacto',component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
