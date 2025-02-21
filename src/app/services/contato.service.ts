import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatoSelecionado: any = null; // Armazena o contato

  setContato(contato: any) {
    this.contatoSelecionado = contato;
  }

  getContato(): any {
    return this.contatoSelecionado;
  }
  constructor() {}
}
