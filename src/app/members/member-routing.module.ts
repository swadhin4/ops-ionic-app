import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'incident', loadChildren: './incident/incident.module#IncidentPageModule' },
  { path: 'site', loadChildren: './site/site.module#SitePageModule' },
  { path: 'asset', loadChildren: './asset/asset.module#AssetPageModule' },
  { path: 'serviceprovider', loadChildren: './serviceprovider/serviceprovider.module#ServiceproviderPageModule' }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }