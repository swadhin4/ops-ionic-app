import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'members/dashboard', loadChildren: './members/dashboard/dashboard.module#DashboardPageModule',canActivate: [AuthGuard] },
  { path: 'members/incident', loadChildren: './members/incident/incident.module#IncidentPageModule',canActivate: [AuthGuard] },
  { path: 'members/site', loadChildren: './members/site/site.module#SitePageModule',canActivate: [AuthGuard] }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }