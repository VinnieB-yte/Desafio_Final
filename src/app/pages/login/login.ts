import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  usuario = '';
  senha = '';

  mostrarSenha = signal(false);
  mensagemErro = signal('');

  carregando = signal(false);

  // Credenciais de teste
  private readonly usuarioCorreto = 'MerlinRavens';
  private readonly emailCorreto = 'merlin@example.com';
  private readonly senhaCorreta = 'Grimorio123';

  constructor(private router: Router) {}

  togglePassword(): void {
    this.mostrarSenha.update(valor => !valor);
  }

  login(): void {
    this.mensagemErro.set('');

    // Verifica usuário ou e-mail
    const usuarioValido =
      this.usuario === this.usuarioCorreto ||
      this.usuario === this.emailCorreto;

    if (!usuarioValido) {
      this.mensagemErro.set('Usuário não encontrado.');
      return;
    }

    // Verifica senha
    if (this.senha !== this.senhaCorreta) {
      this.mensagemErro.set('Senha incorreta.');
      return;
    }

    // Simula o processo de login
    this.carregando.set(true);

    setTimeout(() => {
      this.carregando.set(false);

      // Salva a informação de que o usuário está autenticado
      localStorage.setItem('usuarioLogado', 'true');

      // Login realizado com sucesso
      this.router.navigate(['/home']);
    }, 800);
  }
}