import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  title:string = "Contacto"

  medios:any[] = [
    {"texto": "Twitter"},
    {"texto": "Facebook"},
    {"texto": "Por correo electronico"}
  ]
}
