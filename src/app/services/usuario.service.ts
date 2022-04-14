import { Injectable } from '@angular/core';
import { Usuario } from 'src/assets/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuario: Usuario[] = [
    {codigo: 1, nome: 'Hydrogen', telefone: 1.0079},
    {codigo: 2, nome: 'Helium', telefone: 4.0026},
    {codigo: 3, nome: 'Lithium', telefone: 6.941},
    {codigo: 4, nome: 'Beryllium', telefone: 9.0122},
    {codigo: 5, nome: 'Boron', telefone: 10.811},
    {codigo: 6, nome: 'Carbon', telefone: 12.0107},
    {codigo: 7, nome: 'Nitrogen', telefone: 14.0067},
    {codigo: 8, nome: 'Oxygen', telefone: 15.9994},
    {codigo: 9, nome: 'Fluorine', telefone: 18.9984},
    {codigo: 10, nome: 'Neon', telefone: 20.1797},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuario.slice();
  }
}
