import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../../services/contato.service';
@Component({
  selector: 'app-consulta-contatos',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './consulta-contatos.component.html',
  styleUrl: './consulta-contatos.component.css',
})
export class ConsultaContatosComponent {
  constructor(
    private contatoService: ContatoService,
    private http: HttpClient,
    private router: Router
  ) {} // Injeção do HttpClient
  contatos: any[] = [];
  mensagem: string = '';

  form = new FormGroup({
    nome: new FormControl(''),
  });

  OnSubmit() {
    this.http
      .get(
        'http://localhost:8080/api/contatos/consultar/' + this.form.value.nome
      )
      .subscribe({
        next: (data) => {
          this.contatos = data as any;
        },
        error: (e) => {
          console.log(e);
        },
      });
  }

  editarContato(contato: any) {
    this.contatoService.setContato(contato);
    this.router.navigate(['/pages/edicao-contatos']);
  }

  excluirContato(id: string) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter essa ação!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .delete('http://localhost:8080/api/contatos/deletar/' + id, {
            responseType: 'text',
          })
          .subscribe({
            next: (data) => {
              this.mensagem = data;
              this.OnSubmit();
            },
            error: (e) => {
              console.log(e.error);
            },
          });
      }
    });
  }
}
