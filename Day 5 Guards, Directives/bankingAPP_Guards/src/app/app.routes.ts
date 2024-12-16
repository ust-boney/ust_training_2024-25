import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccountdetailsComponent } from './components/accountdetails/accountdetails.component';
import { TransferfundsComponent } from './components/transferfunds/transferfunds.component';
import { LoginComponent } from './components/login/login.component';
import { ValidateuserService } from './services/validateuser.service';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'accountdetails',component:AccountdetailsComponent,
                            canActivate:[ValidateuserService]},
    {path:'transfer',component:TransferfundsComponent,
                            canActivate:[ValidateuserService]},
    {path:'login',component:LoginComponent}
];
