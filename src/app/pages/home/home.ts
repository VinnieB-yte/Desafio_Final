import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Footer } from '../../shared/footer/footer';

interface CategoriaBiblioteca {
  titulo: string;
  descricao: string;
  imagem: string;
  livros: number;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, RouterLink, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})


export class Home {

  constructor(private router: Router) {

    setInterval(() => {
      this.nextSystem();
    }, 5000);

  }

  currentSystem = signal(0);
  isTransitioning = signal(false);
  heroImage = signal('assets/images/');

  stats = [
    { value: '20+', label: 'Sistemas de RPG' },
    { value: '142k', label: 'Fichas Criadas' },
    { value: '8.500+', label: 'Magias Catalogadas' }
  ]

  systems = [
  {
    title: 'Dungeons & Dragons 5e',
    subtitle: 'Fantasia Medieval',
    image: 'assets/images/dnd-banner.webp',
    rota: '/criar-personagem/dnd5',
    description: 'Explore o sistema de RPG mais conhecido do mundo.',
    fandom: 'https://dnd-5e.fandom.com/wiki/D%26D_5e_Wiki'
  },
  {
    title: 'Pathfinder 2ª Edição',
    subtitle: 'Fantasia Tática',
    image: 'assets/images/pathfinder-banner.webp',
    rota: '/criar-personagem/pathfinder',
    description: 'Classes altamente personalizáveis.',
    fandom: 'https://2e.aonprd.com'
  },
  {
    title: 'Tormenta 20',
    subtitle: 'RPG Brasileiro',
    image: 'assets/images/tormenta-banner.jpg',
    rota: '/criar-personagem/tormenta20',
    description: 'O maior universo nacional de RPG.',
    fandom: 'https://tormenta20.fandom.com/pt-br/wiki/Tormenta20'
  },
  {
    title: 'Vampiro: A Máscara',
    subtitle: 'Horror Urbano',
    image: 'assets/images/vampiro-banner.jpg',
    rota: '/sistemas/vampiro',
    description: 'Intrigas políticas e horror pessoal.',
    fandom: 'https://whitewolf.fandom.com/wiki/Vampire:_The_Masquerade'
  },
  {
    title: 'Call of Cthulhu',
    subtitle: 'Horror Cósmico',
    image: 'assets/images/cthulhu-banner.webp',
    rota: '/criar-personagem/callof-cthulhu',
    description: 'Mistérios e entidades ancestrais.',
    fandom: 'https://callofcthulhu.fandom.com'
  }
];


  nextSystem() {
    this.currentSystem.update(index =>
      index === this.systems.length - 1 ? 0 : index + 1
    );
  }

  previousSystem() {
    this.currentSystem.update(index =>
      index === 0 ? this.systems.length - 1 : index - 1
    );
  }

selectSystem(index: number) {

  if (index === this.currentSystem()) return;

  this.isTransitioning.set(true);

  setTimeout(() => {
    this.currentSystem.set(index);
    this.isTransitioning.set(false);
  }, 180);

}

  categorias = signal<CategoriaBiblioteca[]>([
  {
    titulo: 'Fantasia Medieval & Épica',
    descricao:
      'Reinos esquecidos, cavaleiros, magia ancestral, dragões, deuses e aventuras épicas.',
    imagem: 'assets/images/categories/fantasia-medieval.webp',
    livros: 6,
  },
  {
    titulo: 'Horror & Investigação',
    descricao:
      'Cultos, horrores cósmicos, mistérios sobrenaturais, investigação paranormal e terror psicológico.',
    imagem: 'assets/images/categories/horror-investigacao.jfif',
    livros: 5
  },
  {
    titulo: 'Ficção Científica & Cyberpunk',
    descricao:
      'Megacorporações, IA, exploração espacial, implantes cibernéticos e futuros distópicos.',
    imagem: 'assets/images/categories/cyberpunk.jpg',
    livros: 6
  },
  {
    titulo: 'Sobrenatural & Fantasia Urbana',
    descricao:
      'Vampiros, lobisomens, magos, espíritos e sociedades ocultas vivendo entre os mortais.',
    imagem: 'assets/images/categories/fantasia-urbana.jpg',
    livros: 5
  },
  {
    titulo: 'Sistemas Genéricos & Narrativos',
    descricao:
      'Sistemas universais, RPGs narrativos, regras leves e ferramentas para criação de mundos.',
    imagem: 'assets/images/categories/narrativos.jfif',
    livros: 4
  }
]);

abrirSistema() {
  const sistemaAtual = this.systems[this.currentSystem()];

  this.router.navigateByUrl(sistemaAtual.rota);
}

}

