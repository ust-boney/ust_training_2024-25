import { Routes } from '@angular/router';
import { AccoutsdetailsComponent } from './components/accoutsdetails/accoutsdetails.component';
import { AccoutslistComponent } from './components/accoutslist/accoutslist.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'accountslist',component:AccoutslistComponent},
    {path:'account/:accNo',component:AccoutsdetailsComponent}
];
