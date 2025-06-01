import { Component } from '@angular/core';
import { NavbarindexComponent } from '../../../Componentes/navbarindex/navbarindex.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultar',
  imports: [NavbarindexComponent, CommonModule, FormsModule],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {
  //todos: any[] = [];  
    loading: boolean = false;
  error: string | null = null;

   todos: any[] = [
    {
      id: 1,
      usuario: 'jlopez',
      nombre: 'Juan',
      apellido: 'Lopez',
      documento: '123456789',
      telefono: '555-1234',
      nombre_rol: 'Administrador',
      estado: true
    },
    {
      id: 2,
      usuario: 'mperez',
      nombre: 'Maria',
      apellido: 'Perez',
      documento: '987654321',
      telefono: '555-5678',
      nombre_rol: 'Usuario',
      estado: false
    },
    {
      id: 3,
      usuario: 'lgomez',
      nombre: 'Luis',
      apellido: 'Gomez',
      documento: '555666777',
      telefono: '555-7890',
      nombre_rol: 'Usuario',
      estado: true
    }
  ];

}
