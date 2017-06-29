import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './form/class/class.component';
import { ReactiveComponent } from './form/reactive/reactive.component';
import { fallbackRoute } from 'app/shared/fallback-route';
import { JointcardComponent } from './cards/jointcard/jointcard.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [
  {path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'form/class', pathMatch : 'full' }, // 定義轉向
      { path: 'form/class', component: ClassComponent },
      { path: 'form/reactive', component: ReactiveComponent },
      { path: 'login', component: LoginComponent}  // 會先套用
      // { path: 'login', component: LoginComponent},
    ]
  } ,
   {path: 'login', component: LoginComponent},
  fallbackRoute
];
   // { path: 'jointcard', component: JointcardComponent }
// { path: '', redirectTo: 'jointcard.component', pathMatch : 'full' }
  // { path: '', redirectTo: 'class.component', pathMatch: 'full' }, // 定義轉向
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true,
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
