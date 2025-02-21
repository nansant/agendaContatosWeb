import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ContatoService } from '../../../services/contato.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edicao-contatos',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './edicao-contatos.component.html',
  styleUrl: './edicao-contatos.component.css',
})
export class EdicaoContatosComponent {
  constructor(
    private contatoService: ContatoService,
    private http: HttpClient
  ) {}
  form!: FormGroup;
  contato: any = {};
  mensagem: string = '';

  ngOnInit() {
    this.contato = this.contatoService.getContato();
    console.log(this.contato);

    this.form = new FormGroup({
      nome: new FormControl(this.contato?.nome || ''),
      telefone: new FormControl(this.contato?.telefone || ''),
      email: new FormControl(this.contato?.email || ''),
    });
  }

  OnSubmit() {
    this.http
      .put(
        'http://localhost:8080/api/contatos/atualizar/' + this.contato.id,
        this.form.value,
        {
          responseType: 'text',
        }
      )
      .subscribe({
        next: (data) => {
          this.mensagem = data;
        },
        error: (e) => {
          console.log(JSON.parse(e.error));
        },
      });
  }
}
