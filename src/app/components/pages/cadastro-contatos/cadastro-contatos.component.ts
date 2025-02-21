import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro-contatos',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro-contatos.component.html',
  styleUrl: './cadastro-contatos.component.css',
})
export class CadastroContatosComponent {
  constructor(private http: HttpClient) {}

  form = new FormGroup({
    nome: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
  });

  resposta: string = '';
  erros: any = null;

  OnSubmit() {
    this.http
      .post('http://localhost:8080/api/contatos/cadastrar', this.form.value, {
        responseType: 'text',
      })
      .subscribe({
        next: (data) => {
          this.erros = null;

          this.resposta = data;

          this.form.reset();
        },
        error: (e) => {
          this.resposta = '';
          this.erros = JSON.parse(e.error);
        },
      });
  }
}
