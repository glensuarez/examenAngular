








import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Elemento } from '../models/elemento.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  elementos: Elemento[] = [];
  nuevoElemento: Elemento = { id: 0, name: '', description: '', telefono: '', pais: '' };
  dataSource!: MatTableDataSource<Elemento>; // Agrega un signo de exclamación (!) al final de MatTableDataSource<Elemento>
  displayedColumns: string[] = ['id', 'name', 'description', 'telefono', 'pais', 'acciones'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Agrega un signo de exclamación (!) al final de MatPaginator

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerElementos();
  }

  obtenerElementos(): void {
    this.apiService.obtenerElementos().subscribe(
      (elementos: Elemento[]) => {
        this.elementos = elementos;
        this.dataSource = new MatTableDataSource<Elemento>(this.elementos);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error al obtener elementos:', error);
      }
    );
  }

  agregarElemento(): void {
    this.apiService.agregarElemento(this.nuevoElemento).subscribe(
      (elementoAgregado: Elemento) => {
        this.nuevoElemento.id = elementoAgregado.id;
        this.elementos.push(this.nuevoElemento);
        this.dataSource = new MatTableDataSource<Elemento>(this.elementos);
        this.dataSource.paginator = this.paginator;
        this.nuevoElemento = { id: 0, name: '', description: '', telefono: '', pais: '' };
      },
      (error) => {
        console.error('Error al agregar elemento:', error);
      }
    );
  }

  editarElemento(elemento: Elemento): void {
    this.apiService.editarElemento(elemento.id, elemento).subscribe(
      () => {
        console.log('Elemento editado exitosamente');
      },
      (error) => {
        console.error('Error al editar elemento:', error);
      }
    );
  }

  eliminarElemento(id: number): void {
    const index = this.elementos.findIndex(elemento => elemento.id === id);
    if (index !== -1) {
      this.apiService.eliminarElemento(id).subscribe(
        () => {
          this.elementos.splice(index, 1);
          this.dataSource = new MatTableDataSource<Elemento>(this.elementos);
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          console.error('Error al eliminar elemento:', error);
        }
      );
    } else {
      console.error('Elemento con el id proporcionado no encontrado');
    }
  }
}






















/* import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Elemento } from '../models/elemento.model';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})


export class ListadoComponent implements OnInit {
  elementos: Elemento[] = [];
  nuevoElemento: Elemento = { id: 0, name: '', description: '', telefono: '', pais: '' }; // Declaro la propiedad nuevoElemento
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerElementos();
  }

  obtenerElementos(): void {
    this.apiService.obtenerElementos().subscribe(
      (elementos: Elemento[]) => {
        this.elementos = elementos;
        console.log(this.elementos);
      },
      (error) => {
        console.error('Error al obtener elementos:', error);
      }
    );
  }
  agregarElemento(): void {
    this.apiService.agregarElemento(this.nuevoElemento).subscribe(
      (elementoAgregado: Elemento) => {
        // Actualiza el valor de id con el valor generado por la API
        this.nuevoElemento.id = elementoAgregado.id;
        this.elementos.push(this.nuevoElemento);
        // Reinicia el nuevoElemento para permitir agregar más elementos
        this.nuevoElemento = { id: 0, name: '', description: '', telefono: '', pais: '' };
      },
      (error) => {
        console.error('Error al agregar elemento:', error);
      }
    );
  }
  


  editarElemento(elemento: Elemento): void {
    this.apiService.editarElemento(elemento.id, elemento).subscribe(
      () => {
        console.log('Elemento editado exitosamente');
      },
      (error) => {
        console.error('Error al editar elemento:', error);
      }
    );
  }

  eliminarElemento(id: number): void {
    // Buscar el índice del elemento con el id proporcionado
    const index = this.elementos.findIndex(elemento => elemento.id === id);
    // Verificar si se encontró el elemento con el id proporcionado
    if (index !== -1) {
      // Llamar al método eliminarElemento del servicio con el id
      this.apiService.eliminarElemento(id).subscribe(
        () => {
          // Eliminar el elemento de la lista local
          this.elementos.splice(index, 1);
        },
        (error) => {
          console.error('Error al eliminar elemento:', error);
        }
      );
    } else {
      console.error('Elemento con el id proporcionado no encontrado');
    }
  }
  
}
 */