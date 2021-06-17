import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { HomeComponent } from "./views/home/home.component";
import { RegisterMainComponent } from "./views/register-main/register-main.component";
import { PokemonsComponent} from "./views/poke/pokemons/pokemons.component"
//Rotas
const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path:"register",
  component: RegisterMainComponent
},
{
  path:"pokemons",
  component:PokemonsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
