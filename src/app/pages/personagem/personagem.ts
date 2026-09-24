import { AfterViewInit, Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personagem',
  imports: [FormsModule, Header, Footer, RouterLink],
  templateUrl: './personagem.html',
  styleUrl: './personagem.css',
})

export class Personagem implements AfterViewInit {

  busca = signal('');
  categoriaSelecionada = signal('todos');

  oracleGenero = signal('medieval');
  oracleFoco = signal('balanced');
  oracleLetalidade = signal('moderate');

  sistemas = [

    // ==========================================
    // FANTASIA MEDIEVAL
    // ==========================================

    {
      nome: 'D&D 5e',
      categorias: ['Fantasia Medieval'],
      tipo: 'D20 System',
      descricao:
        'O RPG mais famoso do mundo. Bárbaros, magos, masmorras icônicas e dragões colossais no ápice da alta fantasia.',
      destaque: 'Ficha Automatizada',
      rodape: 'Suporte Roll20/Foundry'
    },

    {
      nome: 'Pathfinder 2e',
      categorias: ['Fantasia Medieval'],
      tipo: 'D20 Tático (3 Ações)',
      descricao:
        'Alta customização tática, centenas de talentos, arquétipos profundos e um motor refinado para combates épicos.',
      destaque: 'Ficha Automatizada',
      rodape: 'SRD Aberto Completo'
    },

    {
      nome: 'Tormenta20',
      categorias: ['Fantasia Medieval'],
      tipo: 'D20 Brasileiro (PM)',
      descricao:
        'O maior RPG nacional. Enfrente a tempestade rubra em Arton com poderes de deuses e heróis audazes.',
      destaque: 'Oficial Jambô',
      rodape: 'Edição Jogo do Ano'
    },

    {
      nome: 'Old Dragon 2',
      categorias: ['Fantasia Medieval'],
      tipo: 'D20 OSR Nacional',
      descricao:
        'Espírito old school puro: exploração de masmorras, recursos escassos e astúcia sobre a força.',
      destaque: 'Letalidade Clássica',
      rodape: 'Regras Ágeis'
    },

    {
      nome: 'Shadow of the Demon Lord',
      categorias: [
        'Fantasia Medieval',
        'Horror & Investigação'
      ],
      tipo: 'D20 + Boons/Banes',
      descricao:
        'Dark fantasy apocalíptico e visceral com progressão modular, horrores grotescos e mecânicas brutais.',
      destaque: 'Alta Letalidade',
      rodape: 'Caminhos Customizáveis'
    },

    {
      nome: 'O Um Anel',
      categorias: ['Fantasia Medieval'],
      tipo: 'Dado do Feitor + D6',
      descricao:
        'A experiência definitiva da Terra-média. Jornadas melancólicas, esperança e a sombra sempre presente.',
      destaque: 'Tolkien Oficial',
      rodape: 'Viagens & Comunhão'
    },


    // ==========================================
    // HORROR & INVESTIGAÇÃO
    // ==========================================

    {
      nome: 'Call of Cthulhu',
      categorias: ['Horror & Investigação'],
      tipo: 'D100 / BRP',
      descricao:
        'Investigadores comuns confrontam deuses cósmicos e cultos, arriscando tudo em busca da verdade.',
      destaque: 'Sanidade (SAN)',
      rodape: '7ª Edição Oficial'
    },

    {
      nome: 'Ordem Paranormal',
      categorias: [
        'Horror & Investigação',
        'Sobrenatural Urbano'
      ],
      tipo: 'D20 Paranormal',
      descricao:
        'Agentes da Ordem investigam manifestações do Outro Lado entre Conhecimento, Sangue, Energia e Medo.',
      destaque: 'Sistema Oficial',
      rodape: 'Sanidade & NEX'
    },

    {
      nome: 'Kult: Divinity Lost',
      categorias: [
        'Horror & Investigação',
        'Sobrenatural Urbano'
      ],
      tipo: '2D10 Narrativo',
      descricao:
        'Nossa realidade é uma prisão ilusória e nossos carcereiros são demônios. Horror psicológico intenso.',
      destaque: 'Conteúdo Maduro',
      rodape: 'Despertar da Ilusão'
    },

    {
      nome: 'Vaesen',
      categorias: [
        'Horror & Investigação',
        'Sobrenatural Urbano'
      ],
      tipo: 'Year Zero Engine (D6)',
      descricao:
        'Investigue criaturas míticas do folclore e lendas sombrias enquanto enfrenta mistérios sobrenaturais.',
      destaque: 'Folclore Gótico',
      rodape: 'Mistérios & Rituais'
    },

    {
      nome: 'Delta Green',
      categorias: [
        'Horror & Investigação',
        'Sobrenatural Urbano'
      ],
      tipo: 'D100 Tático',
      descricao:
        'Agentes federais enfrentam horrores alienígenas e paranormais sob uma conspiração de sigilo absoluto.',
      destaque: 'Conspiração Tática',
      rodape: 'Vínculos & Ruptura'
    },

    {
      nome: 'Alien RPG',
      categorias: [
        'Horror & Investigação',
        'Ficção Científica & Cyberpunk'
      ],
      tipo: 'Year Zero + Dados de Estresse',
      descricao:
        'Horror claustrofóbico e sobrevivência no espaço sideral onde ninguém pode ouvir seus gritos.',
      destaque: 'Pânico Iminente',
      rodape: 'Modo Cinemático & Campanha'
    },

    {
      nome: 'Mothership',
      categorias: [
        'Horror & Investigação',
        'Ficção Científica & Cyberpunk'
      ],
      tipo: 'D100 Panic Table',
      descricao:
        'Sobreviva no espaço hostil contra anomalias insondáveis, isolamento e horrores além da compreensão.',
      destaque: 'Sobrevivência Espacial',
      rodape: 'Horror Sci-Fi'
    },


    // ==========================================
    // FICÇÃO CIENTÍFICA & CYBERPUNK
    // ==========================================

    {
      nome: 'Cyberpunk RED',
      categorias: ['Ficção Científica & Cyberpunk'],
      tipo: 'Interlock (D10 + Stat)',
      descricao:
        'Na Era do Vermelho em Night City, mercenários modificados arriscam a vida por eurodólares.',
      destaque: 'Cyberware & Netrun',
      rodape: 'Humanidade & Estilo'
    },

    {
      nome: 'Shadowrun',
      categorias: [
        'Ficção Científica & Cyberpunk',
        'Sobrenatural Urbano'
      ],
      tipo: 'Pool de D6',
      descricao:
        'O encontro entre ficção cyberpunk, megacorporações, implantes, magia e criaturas sobrenaturais.',
      destaque: 'Cyberpunk + Magia',
      rodape: 'Shadowrunners & Decking'
    },

    {
      nome: 'Starfinder',
      categorias: ['Ficção Científica & Cyberpunk'],
      tipo: 'D20 Espacial',
      descricao:
        'Ciência e magia colidem na galáxia dos Mundos do Pacto com naves, raças alienígenas e aventuras.',
      destaque: 'Science Fantasy',
      rodape: 'Combate de Espaçonaves'
    },


    // ==========================================
    // SOBRENATURAL URBANO
    // ==========================================

    {
      nome: 'Vampiro: A Máscara',
      categorias: ['Sobrenatural Urbano'],
      tipo: 'Storyteller (Pool D10)',
      descricao:
        'Assuma o papel de um imortal predador equilibrando sua fome e humanidade nas intrigas da noite.',
      destaque: 'Fome & Humanidade',
      rodape: '5ª Edição (V5) Oficial'
    },

    {
      nome: 'Lobisomem: O Apocalipse',
      categorias: ['Sobrenatural Urbano'],
      tipo: 'Storyteller (Fúria)',
      descricao:
        'Guerreiros meio-espírito lutam contra a corrupção e o ecocídio em uma guerra sobrenatural.',
      destaque: 'Guerreiros de Gaia',
      rodape: 'W5 Linha Principal'
    },

    {
      nome: 'Mago: A Ascensão',
      categorias: ['Sobrenatural Urbano'],
      tipo: 'Sistema de Esferas (D10)',
      descricao:
        'A própria realidade é maleável pela sua vontade, mas dobrá-la pode atrair o Paradoxo.',
      destaque: 'Magia Dinâmica',
      rodape: '9 Esferas de Conhecimento'
    },

    {
      nome: 'City of Mist',
      categorias: ['Sobrenatural Urbano'],
      tipo: 'Tags + 2D6 PbtA',
      descricao:
        'Detetives comuns canalizam mitos lendários em uma metrópole coberta por uma névoa mágica.',
      destaque: 'Mito vs Logos',
      rodape: 'Narrativo com Temas'
    },

    {
      nome: 'Changeling',
      categorias: ['Sobrenatural Urbano'],
      tipo: 'Storyteller (D10)',
      descricao:
        'Almas feéricas aprisionadas em cascas humanas tentando sobreviver entre o mundo mortal e o Sonhar.',
      destaque: 'Glamour & Sonho',
      rodape: 'Kiths & Ilusões'
    },


    // ==========================================
    // SISTEMAS GENÉRICOS & MODULARES
    // ==========================================

    {
      nome: 'GURPS 4e',
      categorias: ['Sistemas Genéricos & Modulares'],
      tipo: 'Roll-Under 3D6',
      descricao:
        'Um sistema extremamente modular para criar personagens, gêneros e cenários de praticamente qualquer tipo.',
      destaque: 'Construção por Pontos',
      rodape: 'Simulacionista Total'
    },

    {
      nome: 'Fate Core & Acelerado',
      categorias: ['Sistemas Genéricos & Modulares'],
      tipo: '4dF (Dados Fudge)',
      descricao:
        'Focado na narrativa dinâmica. Aspectos definem quem você é e criam reviravoltas dramáticas.',
      destaque: 'Aspectos & Proezas',
      rodape: 'Pontos de Destino'
    },

    {
      nome: 'Savage Worlds (SWADE)',
      categorias: ['Sistemas Genéricos & Modulares'],
      tipo: 'Dado Selvagem (D4 a D12)',
      descricao:
        'Ação pulp cinematográfica e combates acelerados com dados explosivos e muita flexibilidade.',
      destaque: 'Fast! Furious! Fun!',
      rodape: 'Bennies & Explosão'
    },

    {
      nome: 'Powered by the Apocalypse (PbtA)',
      categorias: ['Sistemas Genéricos & Modulares'],
      tipo: 'Motor 2D6 + Stat',
      descricao:
        'Motor conversacional baseado em movimentos, sucessos, sucessos parciais e falhas que movimentam a ficção.',
      destaque: 'Playbooks & Movimentos',
      rodape: 'Falhe Para Diante'
    },

    {
      nome: '3D&T Victory',
      categorias: ['Sistemas Genéricos & Modulares'],
      tipo: '1D6 Clássico Brasileiro',
      descricao:
        'Sistema voltado para emular animes, mangás, jogos de luta e histórias de super-heróis.',
      destaque: 'Anime & Heróis',
      rodape: 'Nova Edição Victory'
    }
  ];

  categorias = [
    {
      id: 'todos',
      nome: 'Todos os Sistemas',
      icone: 'apps'
    },
    {
      id: 'Fantasia Medieval',
      nome: 'Fantasia Medieval',
      icone: 'shield'
    },
    {
      id: 'Horror & Investigação',
      nome: 'Horror & Investigação',
      icone: 'visibility'
    },
    {
      id: 'Ficção Científica & Cyberpunk',
      nome: 'Ficção Científica & Cyberpunk',
      icone: 'terminal'
    },
    {
      id: 'Sobrenatural Urbano',
      nome: 'Sobrenatural Urbano',
      icone: 'bedtime'
    },
    {
      id: 'Sistemas Genéricos & Modulares',
      nome: 'Sistemas Genéricos & Modulares',
      icone: 'tune'
    }
  ];

  selecionarCategoria(categoria: string): void {
    this.categoriaSelecionada.set(categoria);
  }

  buscar(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.busca.set(input.value);
  }

  temSistemasNaCategoria(categoria: string): boolean {
  return this.sistemasFiltrados().some(
    sistema => sistema.categorias.includes(categoria)
  );
  }

  quantidadePorCategoria(categoria: string): number {
    return this.sistemas.filter(sistema =>
      sistema.categorias.includes(categoria)
    ).length;
  }

  sistemasFiltrados = computed(() => {
    const buscaNormalizada = this.busca().trim().toLowerCase();
    const categoria = this.categoriaSelecionada();

    return this.sistemas.filter(sistema => {
      const pertenceCategoria =
        categoria === 'todos' ||
        sistema.categorias.includes(categoria);

      const correspondeBusca =
        !buscaNormalizada ||
        sistema.nome.toLowerCase().includes(buscaNormalizada) ||
        sistema.tipo.toLowerCase().includes(buscaNormalizada) ||
        sistema.descricao.toLowerCase().includes(buscaNormalizada);

      return pertenceCategoria && correspondeBusca;
    });
  });

  iniciarFicha(sistema: string): void {
    console.log(`Iniciando ficha para ${sistema}`);
  }

  oracleRecomendacao = computed(() => {
  const g = this.oracleGenero();
  const f = this.oracleFoco();
  const l = this.oracleLetalidade();

  if (g === 'medieval') {
    if (l === 'high') {
      return 'Shadow of the Demon Lord ou Old Dragon 2';
    } else if (f === 'tactical') {
      return 'Pathfinder 2e';
    } else if (f === 'narrative') {
      return 'O Um Anel';
    } else {
      return 'Tormenta20 ou D&D 5e';
    }
  }

  if (g === 'horror') {
    if (f === 'tactical') {
      return 'Delta Green ou Alien RPG';
    } else if (l === 'high') {
      return 'Kult: Divinity Lost ou Alien RPG';
    } else {
      return 'Call of Cthulhu ou Ordem Paranormal';
    }
  }

  if (g === 'cyberpunk') {
    if (f === 'tactical') {
      return 'Cyberpunk RED ou Shadowrun';
    } else if (l === 'high') {
      return 'Mothership';
    } else {
      return 'Starfinder';
    }
  }

  if (g === 'supernatural') {
    if (f === 'narrative') {
      return 'City of Mist';
    } else if (f === 'tactical') {
      return 'Lobisomem: O Apocalipse (W5)';
    } else {
      return 'Vampiro: A Máscara (V5)';
    }
  }

  if (g === 'generic') {
    if (f === 'narrative') {
      return 'Fate Core ou PbtA';
    } else if (f === 'tactical') {
      return 'GURPS 4e ou Savage Worlds';
    } else {
      return '3D&T Victory ou Savage Worlds';
    }
  }

      return 'D&D 5e';
    });

    @ViewChild('systemsCarousel')
    systemsCarousel!: ElementRef<HTMLDivElement>;

    ngAfterViewInit() {
  const carousel = this.systemsCarousel.nativeElement;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let moved = false;

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    moved = false;

    startX = e.pageX;
    scrollLeft = carousel.scrollLeft;

    carousel.style.cursor = 'grabbing';
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    e.preventDefault();

    moved = true;

    const walk = (e.pageX - startX) * 1.2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Continua funcionando com a roda do mouse.
  carousel.addEventListener('wheel', (e) => {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY;
  });

  // Evita clicar no botão quando o usuário estava arrastando.
  carousel.querySelectorAll('button').forEach((button) => {
    button.addEventListener(
      'click',
      (event) => {
        if (moved) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      true
    );
  });
}

}