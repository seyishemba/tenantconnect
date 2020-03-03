import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then( m => m.ListingPageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'view-listing',
    loadChildren: () => import('./view-listing/view-listing.module').then( m => m.ViewListingPageModule)
  },
  {
    path: 'view-request',
    loadChildren: () => import('./view-request/view-request.module').then( m => m.ViewRequestPageModule)
  },
  {
    path: 'add-listing',
    loadChildren: () => import('./add-listing/add-listing.module').then( m => m.AddListingPageModule)
  },
  {
    path: 'add-request',
    loadChildren: () => import('./add-request/add-request.module').then( m => m.AddRequestPageModule)
  },
  {
    path: 'connections',
    loadChildren: () => import('./connections/connections.module').then( m => m.ConnectionsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
