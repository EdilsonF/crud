import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaService } from '../shared/pessoa.service';
import { PessoaDataService } from '../shared/pessoa-data.service';
import { Pessoa } from '../shared/pessoa';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pessoas: Observable<any>;

  constructor(private pessoaService: PessoaService, private pessoaDataService: PessoaDataService) { }

  ngOnInit() {
    this.pessoas = this.pessoaService.getAll();
  }
  delete(key: string){
    this.pessoaService.delete(key);
  }
  edit(pessoa: Pessoa, key: string){
    this.pessoaDataService.changePessoa(pessoa, key);
  }

}
