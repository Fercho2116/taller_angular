import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { ListaPersonasComponent } from './shared/lista-personas/lista-personas.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http'; 
import { Foto } from './interfaz/foto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent, ListaPersonasComponent, HttpClientModule, RouterLink],
  providers:[RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'clienteAngular';
  fotos: Foto[] = [];
  constructor(private recursosServices: RecursosService){
    recursosServices.obtenerDatos().subscribe(respuesta =>{
      this.fotos = respuesta as Array<Foto>
    })
  }
}
