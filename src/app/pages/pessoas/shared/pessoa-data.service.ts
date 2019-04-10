import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaDataService {
  private pessoaSource = new BehaviorSubject({ pessoa: null, key: '' });
  currentPessoa = this.pessoaSource.asObservable();

  constructor(){}

  changePessoa(pessoa: Pessoa, key: string) {
    this.pessoaSource.next({pessoa: pessoa, key: key});
  }
}
