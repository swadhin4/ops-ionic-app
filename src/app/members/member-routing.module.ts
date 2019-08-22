import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'incident', loadChildren: './incident/incident.module#IncidentPageModule' },
  { path: 'site', loadChildren: './site/site.module#SitePageModule' },
  { path: 'asset', loadChildren: './asset/asset.module#AssetPageModule' },
  { path: 'serviceprovider', loadChildren: './serviceprovider/serviceprovider.module#ServiceproviderPageModule' },
  { path: 'detail', loadChildren: './incident/detail/detail.module#DetailPageModule' },
  { path: 'license', loadChildren: './site/license/license.module#LicensePageModule' },
  { path: 'submeter', loadChildren: './site/submeter/submeter.module#SubmeterPageModule' },
  { path: 'operations', loadChildren: './site/operations/operations.module#OperationsPageModule' },
  { path: 'detail', loadChildren: './asset/detail/detail.module#DetailPageModule' },
  { path: 'equipment', loadChildren: './asset/detail/equipment/equipment.module#EquipmentPageModule' }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }