import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-personas',
  standalone: true,
  imports: [],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent {
  alumnos:any[] = [
    {"persona": ["Fernando", "Masculino", "Soltero", "22"]},
    {"persona": ["Maria", "Femenina", "Casado", "40"]},
    {"persona": ["Pepe", "Masculina", "Casado", "56"]},
  ]
}
