import { Routes } from '@angular/router';
import { CadastroContatosComponent } from './components/pages/cadastro-contatos/cadastro-contatos.component';
import { ConsultaContatosComponent } from './components/pages/consulta-contatos/consulta-contatos.component';
import { EdicaoContatosComponent } from './components/pages/edicao-contatos/edicao-contatos.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'pages/cadastro-contatos',
    component: CadastroContatosComponent,
  },
  {
    path: 'pages/consulta-contatos',
    component: ConsultaContatosComponent,
  },
  {
    path: 'pages/edicao-contatos',
    component: EdicaoContatosComponent,
  },
];
