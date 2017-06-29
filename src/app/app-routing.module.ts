import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './form/class/class.component';
import { ReactiveComponent } from './form/reactive/reactive.component';
import { fallbackRoute } from 'app/shared/fallback-route';
import { JointcardComponent } from './cards/jointcard/jointcard.component';



const routes: Routes = [
  // {path: '', component: ClassComponent }, // 預設
  { path: '', redirectTo: 'class.component', pathMatch: 'full' }, // 定義轉向
  { path: 'reactive.component', component: ReactiveComponent },
  { path: 'class.component', component: ClassComponent },
  {
    path: 'cards',
    children: [
      { path: '', redirectTo: 'jointcard.component', pathMatch : 'full' }
      // { path: 'jointcard', component: JointcardComponent }
    ]
  },
  fallbackRoute
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true,
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
