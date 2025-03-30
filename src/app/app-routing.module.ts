import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Modification : 'home' au lieu de ''
  { path: 'offre', component: NavbarComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirection par défaut vers /home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
