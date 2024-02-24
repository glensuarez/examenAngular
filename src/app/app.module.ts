import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoComponent } from './listado/listado.component'
import { FormsModule } from '@angular/forms'; // Importa FormsModul
import { TelefonoFormatPipe } from './pipe/telefono-format.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  declarations: [
     // componentes y pipes
    AppComponent,
    ListadoComponent,
    ListadoComponent,
    TelefonoFormatPipe,
    
  ],
  imports: [
    //Otros imports y configuraciones
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Agrega FormsModule
    MatPaginatorModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
