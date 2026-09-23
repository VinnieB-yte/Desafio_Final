import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type HeaderMode = 'home' | 'profile' | 'character' | 'forum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // <-- ESTE IMPORT É O QUE FALTAVA
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

   menuOpen = signal(false);

  menuItems = [
    { label: 'Início', route: '/home' },
    { label: 'Criar Personagem', route: '/personagem' },
    { label: 'Meus Personagens', route: '/perfil' },
    { label: 'Comunidade', route: '/forum' }
  ];

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

}