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
  form = new FormGroup({
    nome: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  resposta: string = '';

  OnSubmit() {
    this.http
      .post('http://localhost:8080/api/contatos/cadastrar', this.form.value, {
        responseType: 'text',
      })
      .subscribe({
        next: (data) => {
          this.resposta = data;
        },
        error: (e) => {
          console.log(e.error);
        },
      });
  }
}
