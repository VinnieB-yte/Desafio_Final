import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.html',
  styleUrls: ['./index.css']
})

export class Index implements OnInit, OnDestroy {
  // Carrossel
  currentSlide = 0;
  private autoPlayTimer: any;

  slides: SystemSlide[] = [
    {
      tag: 'Fantasia Heroica • 5ª Edição',
      tagColorClass: 'text-primary',
      title: 'Dungeons & Dragons 5e',
      description: 'O maior e mais icônico sistema de RPG do mundo. Forje lendas, explore masmorras ancestrais, enfrente dragões temíveis e liberte feitiços arcanos com seus companheiros em Faerûn.',
      image: 'https://leinadrengaw.wordpress.com/wp-content/uploads/2017/04/dnd.jpg?w=1200',
      btnText: 'Criar Persona D&D',
      btnIcon: 'add_circle',
      wikiUrl: 'https://dnd-5e.fandom.com/wiki/D%26D_5e_Wiki',
      wikiName: 'Wiki Fandom D&D'
    },
    {
      tag: 'Fantasia Medieval Brasileira • Arton',
      tagColorClass: 'text-primary',
      title: 'Tormenta20',
      description: 'O maior cenário nacional de RPG. Explore o vasto continente de Arton, sirva aos deuses do Panteão e combata a tempestade rubra alienígena da Tormenta em batalhas cinematográficas e letais.',
      image: 'https://abcdorpg.com/wp-content/uploads/2021/03/Tormenta-20-o-que-mudou.jpg',
      btnText: 'Criar Persona T20',
      btnIcon: 'add_circle',
      wikiUrl: 'https://tormenta20.fandom.com/pt-br/wiki/Tormenta20',
      wikiName: 'Wiki Fandom Tormenta'
    },
    {
      tag: 'Horror Cósmico & Investigação • 7ª Ed.',
      tagColorClass: 'text-secondary',
      title: 'Call of Cthulhu 7e',
      description: 'O clássico terror lovecraftiano. Você não é um herói imbatível, mas sim um investigador frágil desvendando cultos blasfemos e horrores primordiais que desafiam a sanidade humana.',
      image: 'https://movimentorpg.com.br/wp-content/uploads/2025/07/capa-call-of-cthulhu-7th.webp',
      btnText: 'Criar Persona CoC',
      btnIcon: 'psychology',
      wikiUrl: 'https://callofcthulhu.fandom.com',
      wikiName: 'Wiki Fandom CoC'
    },
    {
      tag: 'Horror Pessoal & Sobrenatural • V5',
      tagColorClass: 'text-secondary',
      title: 'Vampiro: A Máscara',
      description: 'Mergulhe no Mundo das Trevas contemporâneo. Equilibre a Fome interior com resquícios de sua humanidade enquanto navega pela política mortal da Camarilla e dos Anarquistas.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGHq50YtiEcZMLt7pVKzg6Pq-KuTN-G3ugtjLGuOXYKw--muo5Gnfei4&s=10',
      btnText: 'Criar Persona V5',
      btnIcon: 'bloodtype',
      wikiUrl: 'https://whitewolf.fandom.com/wiki/Vampire:_The_Masquerade',
      wikiName: 'Wiki Fandom WoD'
    },
    {
      tag: 'Fantasia Tática • 2ª Edição',
      tagColorClass: 'text-primary',
      title: 'Pathfinder 2e',
      description: 'Customização sem limites e combate tático refinado pelo sistema de 3 ações. Descubra Golarion com milhares de talentos, arquétipos e feitiços balanceados com perfeição.',
      image: 'https://cdn11.bigcommerce.com/s-e0sdfpgiwh/images/stencil/1280x1280/b/categorythumbnail_pf2e_rulebooks__11183.original.jpg',
      btnText: 'Criar Persona PF2e',
      btnIcon: 'shield',
      wikiUrl: 'https://2e.aonprd.com',
      wikiName: 'Archives of Nethys'
    }
  ];

  // Abas do módulo de atributos
  activeTab: 'dnd5e' | 't20' | 'coc' | 'v5' = 'dnd5e';

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  // Métodos do Carrossel
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.startAutoPlay();
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }

  // Controle de Abas
  selectTab(tab: 'dnd5e' | 't20' | 'coc' | 'v5'): void {
    this.activeTab = tab;
  }
}

interface SystemSlide {
  tag: string;
  tagColorClass: string;
  title: string;
  description: string;
  image: string;
  btnText: string;
  btnIcon: string;
  wikiUrl: string;
  wikiName: string;
}


