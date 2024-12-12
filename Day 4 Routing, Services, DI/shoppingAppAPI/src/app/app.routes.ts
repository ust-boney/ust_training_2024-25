import { Routes } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductviewComponent } from './components/productview/productview.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'productlist',component:ProductlistComponent},
    {path:'productview/:pid',component:ProductviewComponent}
];
