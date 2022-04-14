import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { Usuario } from 'src/assets/interfaces/usuario';
import {MatSort, Sort} from '@angular/material/sort';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  listUsuario: Usuario[] = [];

  displayedColumns: string[] = ['codigo', 'nome', 'telefone','acao'];
  // dataSource = listUsuario;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort) sort!: MatSort;


  // constructor(private _usuarioService: UsuarioService){}

  ngOnInit(): void{
    this.cargaUsuario();
  }

cargaUsuario(){
  // this.listUsuario = this._usuarioService.getUsuario();
  this.dataSource = new MatTableDataSource(this.listUsuario)
}


}
