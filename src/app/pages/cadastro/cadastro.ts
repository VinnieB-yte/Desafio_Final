import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {

  usuario = '';
  email = '';
  senha = '';
  confirmarSenha = '';

  mostrarSenha = signal(false);
  mostrarConfirmacao = signal(false);
  termosAceitos = false;

  mensagemErro = signal('');
  carregando = signal(false);

  constructor(private router: Router) {}

  togglePassword(): void {
    this.mostrarSenha.update(valor => !valor);
  }

  toggleConfirmacao(): void {
    this.mostrarConfirmacao.update(valor => !valor);
  }

  cadastrar(): void {
    this.mensagemErro.set('');

    if (!this.termosAceitos) {
      this.mensagemErro.set('Você precisa aceitar os Termos de Uso e as Diretrizes da Comunidade.');
      return;
    }

    if (!this.usuario.trim()) {
      this.mensagemErro.set('Informe um nome de usuário.');
      return;
    }

    if (!this.email.trim()) {
      this.mensagemErro.set('Informe seu e-mail.');
      return;
    }

    if (!this.email.includes('@')) {
      this.mensagemErro.set('Informe um e-mail válido.');
      return;
    }

    if (!this.senha) {
      this.mensagemErro.set('Informe uma senha.');
      return;
    }

    if (this.senha.length < 8) {
      this.mensagemErro.set('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.mensagemErro.set('As senhas não coincidem.');
      return;
    }


    this.carregando.set(true);

    setTimeout(() => {
      this.carregando.set(false);

      this.router.navigate(['/home']);
    }, 800);
  }
}