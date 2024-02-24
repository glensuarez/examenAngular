import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Elemento } from '../models/elemento.model'; //Importa la interfaz Elemento

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:44358/api/Elementos'; // URL de la API .NET para elementos

  constructor(private http: HttpClient) {}

  // Método para agregar un nuevo elemento
  agregarElemento(elemento: Elemento): Observable<Elemento> {
    return this.http.post<Elemento>(this.apiUrl, elemento);
  }

  // Método para obtener todos los elementos
  obtenerElementos(): Observable<Elemento[]> {
    return this.http.get<Elemento[]>(this.apiUrl);
  }
  
  editarElemento(id: number, elemento: Elemento): Observable<Elemento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Elemento>(url, elemento);
  }

  eliminarElemento(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}