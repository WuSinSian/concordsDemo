import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './form/class/class.component';
import { ReactiveComponent } from './form/reactive/reactive.component';

const routes: Routes = [
  {path: '', component: ClassComponent },
   {path: 'reactive.component', component: ReactiveComponent },
  {path: 'class.component', component: ClassComponent },
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    enableTracing: false,
    useHash: false,
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
