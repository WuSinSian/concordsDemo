import { Route } from '@angular/router';
export const fallbackRoute: Route = {
 path: '**' , redirectTo: 'class.component', pathMatch: 'full' // 無效頁面全轉來此
}


