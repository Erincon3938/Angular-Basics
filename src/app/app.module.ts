import { AppRoutingModule } from './app-routing.module';
import { PersonajeInputComponent } from './personajes/personaje-input.component';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [

    AppComponent,
    PersonajesComponent ,
    PersonajeInputComponent

  ],

  imports: [

    BrowserModule ,
    FormsModule ,
    AppRoutingModule ,
    HttpClientModule

  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
