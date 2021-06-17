

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './pokemon/template/header/header.component';
import { FooterComponent } from './pokemon/template/footer/footer.component';
import { NavComponent } from './pokemon/template/nav/nav.component';

//Modulos
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './views/home/home.component';
import { RegisterMainComponent } from './views/register-main/register-main.component';
import { PokemonsComponent } from './views/poke/pokemons/pokemons.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RegisterMainComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
