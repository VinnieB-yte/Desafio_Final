import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

export type HeaderMode = 'home' | 'profile' | 'character' | 'forum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // <-- ESTE IMPORT É O QUE FALTAVA
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class Header {

  router = inject(Router);

  menuOpen = signal(false);

  profileMenuOpen = signal(false);

  menuItems = [
    { label: 'Início', route: '/home' },
    { label: 'Biblioteca', route: '/personagem' },
    { label: 'Meus Personagens', route: '/perfil' },
    { label: 'Comunidade', route: '/forum' }
  ];

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

   toggleProfileMenu(){
    this.profileMenuOpen.update(open => !open);
  }

  closeProfileMenu(){
    this.profileMenuOpen.set(false);
  }

  logout(){

    console.log('Logout Executado')

    this.closeProfileMenu();
    this.closeMenu();

    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['/login']);
  }

}