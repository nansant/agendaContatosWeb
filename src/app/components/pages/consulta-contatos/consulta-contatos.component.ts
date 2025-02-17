import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-consulta-contatos',
  imports: [CommonModule],
  templateUrl: './consulta-contatos.component.html',
  styleUrl: './consulta-contatos.component.css',
})
export class ConsultaContatosComponent {
  constructor(private http: HttpClient) {} // Injeção do HttpClient
  contatos: any[] = [];
  ngOnInit() {
    this.http.get('http://localhost:8080/api/contatos/consultar').subscribe({
      next: (data) => {
        this.contatos = data as any;
      },
    });
  }
  email = '@';
}
