import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
    path: 'listing/:type',
    loadChildren: () => import('./listing/listing.module').then( m => m.ListingPageModule)
  },
  {
    path: 'requests/:type',
    loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'view-listing/:id',
    loadChildren: () => import('./view-listing/view-listing.module').then( m => m.ViewListingPageModule)
  },
  {
    path: 'view-request/:id',
    loadChildren: () => import('./view-request/view-request.module').then( m => m.ViewRequestPageModule)
  },
  {
    path: 'add-listing/:id',
    loadChildren: () => import('./add-listing/add-listing.module').then( m => m.AddListingPageModule)
  },
  {
    path: 'add-request/:id',
    loadChildren: () => import('./add-request/add-request.module').then( m => m.AddRequestPageModule)
  },
  {
    path: 'connections',
    loadChildren: () => import('./connections/connections.module').then( m => m.ConnectionsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'view-connection/:id',
    loadChildren: () => import('./view-connection/view-connection.module').then( m => m.ViewConnectionPageModule)
  },
  {
    path: 'edit-avatar',
    loadChildren: () => import('./edit-avatar/edit-avatar.module').then( m => m.EditAvatarPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
