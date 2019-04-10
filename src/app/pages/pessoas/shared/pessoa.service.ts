import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private db: AngularFireDatabase) { }

  insert(pessoa: Pessoa){
    this.db.list('pessoa').push(pessoa)
    .then((result: any) => {
      console.log(result.key);
    });
  }
  update(pessoa: Pessoa, key: string){
    this.db.list('pessoa').update(key, pessoa)
    .catch((erro: any) => {
      console.log(erro.key);
    });
  }
  getAll(){
    return this.db.list('pessoa')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }
  delete(key: string){
     this.db.object(`pessoa/${key}`).remove();
  }
}
