import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MentalStateComponent } from './mental-state/mental-state.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offre', component: NavbarComponent },
  { path: 'mental', component: MentalStateComponent }, 
  { path: 'dashboard', component: DashboardComponent } // <- C’est cette route
 // <- C’est cette route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
