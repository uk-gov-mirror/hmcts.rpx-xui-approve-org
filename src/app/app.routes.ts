import { Routes } from '@angular/router';


export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'organisation',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: '../users/users.module#UsersModule'
  },
  {
    path: 'profile',
    loadChildren: '../auth/auth.module#AuthModule'
  },
  {
    path: 'fee-accounts',
    loadChildren: '../fee-accounts/fee-accounts.module#FeeAccountsModule'
  },
  {
    path: 'organisations',
    loadChildren: '../org-manager/org-manager.module#OrgManagerModule'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

