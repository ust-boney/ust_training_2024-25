import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MalehomeComponent } from './components/male/malehome/malehome.component';
import { FemalehomeComponent } from './components/female/femalehome/femalehome.component';
import { KidshomeComponent } from './components/kids/kidshome/kidshome.component';
import { UserprofileComponent } from './components/userprofile/userprofile/userprofile.component';
import { CartComponent } from './components/cart/cart.component';
import { ClothingComponent } from './components/male/clothing/clothing.component';
import { AccessoriesComponent } from './components/male/accessories/accessories.component';
import { ShoesComponent } from './components/male/shoes/shoes.component';
import { FemaleclothingComponent } from './components/female/femaleclothing/femaleclothing.component';
import { FemaleaccessoriesComponent } from './components/female/femaleaccessories/femaleaccessories.component';
import { FemaleshoesComponent } from './components/female/femaleshoes/femaleshoes.component';
import { KidsclothingComponent } from './components/kids/kidsclothing/kidsclothing.component';
import { ToysComponent } from './components/kids/toys/toys.component';
import { KidsshoesComponent } from './components/kids/kidsshoes/kidsshoes.component';



export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',component:HomeComponent},
    {path:'male',component:MalehomeComponent,children:[
        {path:'male/home',component:MalehomeComponent},
        {path:'male/clothing',component:ClothingComponent},
        {path: 'male/accessories',component:AccessoriesComponent},
        {path:'male/shoes', component:ShoesComponent}
    ]},
    {path:'female',component:FemalehomeComponent,children:[
        {path:'female/home',component:FemalehomeComponent},
        {path:'female/clothing',component:FemaleclothingComponent},
        {path: 'female/accessories',component:FemaleaccessoriesComponent},
        {path:'female/shoes', component:FemaleshoesComponent}
    ]},
    {path:'kids',component:KidshomeComponent,
        children:[
            {path:'kids/home',component:KidshomeComponent},
            {path:'kids/clothing',component:KidsclothingComponent},
            {path: 'kids/toys',component:ToysComponent},
            {path:'kids/shoes', component:KidsshoesComponent}
        ]
    },
    {path:'userprofile',component:UserprofileComponent},
    {path:'cart',component:CartComponent},

];
