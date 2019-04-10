import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../shared/pessoa';
import { PessoaService } from '../shared/pessoa.service';
import { PessoaDataService } from '../shared/pessoa-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pessoa: Pessoa;
  key: string = '';
  constructor(private pessoaService: PessoaService, private pessoaDataService: PessoaDataService) { }
  
  ngOnInit() {
    this.pessoa = new Pessoa();
    this.pessoaDataService.currentPessoa.subscribe(data => {
      if(data.pessoa && data.key){
        this.pessoa = new Pessoa();
        this.pessoa.nome = data.pessoa.nome;
        this.pessoa.idade = data.pessoa.idade;
        this.pessoa.email = data.pessoa.email;
        this.pessoa.cidade = data.pessoa.cidade;
        this.key = data.key;
      }
    });
  }
  onSubmit(){
    if(this.key){
      this.pessoaService.update(this.pessoa, this.key);
    }else{
      this.pessoaService.insert(this.pessoa);
    }

    this.pessoa = new Pessoa();
  }

}
