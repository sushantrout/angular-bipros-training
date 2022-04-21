import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-info',
    loadChildren: () =>
      import('../app/components/users-info/users-info.module').then(m => m.UsersInfoModule)
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('../app/components/faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/components/home/home.module').then((m) => m.HomeModule),
  },{
    path: 'galery',
    loadChildren: () =>
      import('../app/components/galery/galery.module').then(m => m.GaleryModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
