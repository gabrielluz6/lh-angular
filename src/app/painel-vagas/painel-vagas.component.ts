import { Component, OnInit } from '@angular/core';
import { Vagas } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: Vagas = new Vagas(0,"","","",0);
  public vagas: Vagas[]=[];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
  }

   cadastrar(){
     this._vagasService.cadastrarVaga(this.vaga).subscribe(
       vaga => {this.vaga = new Vagas(0,"","","",0)},
       err => {console.log("Erro ao Cadastrar")}
     );

    window.location.href = "/mural";
  }
   atualizar(id: number){
     this._vagasService.atualizarVaga(id,this.vaga).subscribe(
       vaga => {this.vaga = new Vagas(0,"","","",0)},
       err => {console.log("Erro ao Atualizar")}
     );

    window.location.href = "/mural";
 }
   excluir(id: number){
     this._vagasService.removerVaga(id).subscribe(
       vaga => {this.vaga = new Vagas(0,"","","",0)},
       err => {console.log("Erro ao Excluir")}
     );

    window.location.href = "/mural";
 }
}
