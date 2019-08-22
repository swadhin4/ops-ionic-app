import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'members/dashboard', loadChildren: './members/dashboard/dashboard.module#DashboardPageModule',canActivate: [AuthGuard] },
  { path: 'members/incident', loadChildren: './members/incident/incident.module#IncidentPageModule',canActivate: [AuthGuard] },
  { path: 'members/incident/detail/:incidentNumber/:spType', loadChildren: './members/incident/detail/detail.module#DetailPageModule',canActivate: [AuthGuard] },
  { path: 'members/site', loadChildren: './members/site/site.module#SitePageModule',canActivate: [AuthGuard] },
  { path: 'members/asset', loadChildren: './members/asset/asset.module#AssetPageModule',canActivate: [AuthGuard] },
  { path: 'members/serviceprovider', loadChildren: './members/serviceprovider/serviceprovider.module#ServiceproviderPageModule',canActivate: [AuthGuard] },
  { path: 'members/site/sitemaps/:siteId', loadChildren: './members/site/sitemaps/sitemaps.module#SitemapsPageModule' },
  { path: 'members/site/detail/:siteId', loadChildren: './members/site/detail/detail.module#DetailPageModule',canActivate: [AuthGuard] },
  { path: 'members/site/licenses/:siteId', loadChildren: './members/site/license/license.module#LicensePageModule',canActivate: [AuthGuard] },
  { path: 'members/site/submeter/:siteId', loadChildren: './members/site/submeter/submeter.module#SubmeterPageModule',canActivate: [AuthGuard] },
  { path: 'members/site/operations/:siteId', loadChildren: './members/site/operations/operations.module#OperationsPageModule',canActivate: [AuthGuard] },
  { path: 'members/asset/detail/:assetId', loadChildren: './members/asset/detail/detail.module#DetailPageModule',canActivate: [AuthGuard] },
  { path: 'members/asset/detail/equipment/:assetId', loadChildren: './members/asset/detail/equipment/equipment.module#EquipmentPageModule',canActivate: [AuthGuard] }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }