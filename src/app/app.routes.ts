import { Routes } from '@angular/router';
import { FirstScreen } from './layouts/first-screen/first-screen';
export const routes: Routes = [

  {
    path: '',
    component: FirstScreen,
    children: [
      { path: '', redirectTo: 'biblia', pathMatch: 'full' },
      {
        path: 'biblia',
        loadComponent: () => import('./screens/biblia-screen/biblia-screen').then(m => m.BibliaScreen),
      }
     
    ]
}
]