import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import {HomeComponent} from "./views/home/home.component";
import {RegisterMainComponent} from "./views/register-main/register-main.component";

//Rotas
const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path:"/register",
  component: RegisterMainComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
