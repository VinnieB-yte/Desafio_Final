import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Header } from '../../../shared/header/header';
import { Footer } from '../../../shared/footer/footer';


type AtributoChave =
  | 'forca'
  | 'destreza'
  | 'constituicao'
  | 'inteligencia'
  | 'sabedoria'
  | 'carisma';


interface Atributos {
  forca: number;
  destreza: number;
  constituicao: number;
  inteligencia: number;
  sabedoria: number;
  carisma: number;
}


interface Pericia {
  nome: string;
  atributo: AtributoChave;
  selecionada: boolean;
}


interface Equipamento {
  nome: string;
  descricao: string;
  bonus: string;
  equipado: boolean;
}


interface Armadura {
  nome: string;
  descricao: string;
  caBase: number;
  limiteDestreza: number | null;
}


@Component({
  selector: 'app-dnd5',
  standalone: true,
  imports: [
    Header,
    Footer,
    FormsModule
  ],
  templateUrl: './dnd5.html',
  styleUrl: './dnd5.css'
})


export class Dnd5 {

  currentSystem = signal(0);

   systems = [
  {
    title: 'Dungeons & Dragons 5e',
    subtitle: 'Fantasia Medieval',
    image: 'assets/images/dnd-banner.jpg',
    rota: '/criar-personagem/dnd5',
    description: 'Explore o sistema de RPG mais conhecido do mundo.',
    fandom: 'https://dnd-5e.fandom.com/wiki/D%26D_5e_Wiki'
  },
  {
    title: 'Pathfinder 2ª Edição',
    subtitle: 'Fantasia Tática',
    image: 'assets/images/pathfinder-banner.jpg',
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
    image: 'assets/images/vampiro-banner.avif',
    rota: '/sistemas/vampiro',
    description: 'Intrigas políticas e horror pessoal.',
    fandom: 'https://whitewolf.fandom.com/wiki/Vampire:_The_Masquerade'
  },
  {
    title: 'Call of Cthulhu',
    subtitle: 'Horror Cósmico',
    image: 'assets/images/cthulhu-banner.jpg',
    rota: '/criar-personagem/callof-cthulhu',
    description: 'Mistérios e entidades ancestrais.',
    fandom: 'https://callofcthulhu.fandom.com'
  }
];

  // =========================================================
  // SISTEMA
  // =========================================================

  sistema = signal({
    nome: 'Dungeons & Dragons 5ª Edição',
    categoria: 'Fantasia Medieval & Alta Magia',
    selo: 'Sistema Oficial • D&D 5.1 SRD',

    descricao:
      'O RPG de fantasia mais icônico do mundo. Construa heróis lendários através de raças fantásticas, classes épicas e magia ancestral.',

    autor: 'Gary Gygax & Dave Arneson',
    licenca: 'Wizards of the Coast (SRD)',
    dificuldade: 'Intermediária',

    banner: 'assets/images/sistemas/dnd5-banner.jpg'
  });


  // =========================================================
  // IDENTIDADE
  // =========================================================

  nomePersonagem = signal('Thorne Valerius');

  pronomes = signal('ele/dele');

  raca = signal('Humano');

  subraca = signal('Humano Variante (+1 Talento, +1 Perícia)');

  classe = signal('Guerreiro');

  subclasse = signal('Mestre de Batalha');

  nivel = signal(3);

  tendencia = signal('Caótico e Bom');

  antecedente = signal('Soldado');

  historia = signal(
    'Veterano do Cerco de Elturel. Carrega o sinete desgastado de sua companhia caída e busca honrar a memória dos irmãos de armas enfrentando as ameaças que assolam a Costa da Espada.'
  );


  // =========================================================
  // ATRIBUTOS
  // =========================================================
  //
  // Compra de pontos:
  //
  // FOR 15 = 9
  // DES 14 = 7
  // CON 13 = 5
  // INT 12 = 4
  // SAB 10 = 2
  // CAR 8  = 0
  //
  // TOTAL = 27
  //
  // =========================================================

  atributos = signal<Atributos>({
    forca: 15,
    destreza: 14,
    constituicao: 13,
    inteligencia: 12,
    sabedoria: 10,
    carisma: 8
  });


  // =========================================================
  // LISTA DE ATRIBUTOS
  // =========================================================

  atributosLista: {
    chave: AtributoChave;
    sigla: string;
    nome: string;
  }[] = [
    {
      chave: 'forca',
      sigla: 'FOR',
      nome: 'Força'
    },
    {
      chave: 'destreza',
      sigla: 'DES',
      nome: 'Destreza'
    },
    {
      chave: 'constituicao',
      sigla: 'CON',
      nome: 'Constituição'
    },
    {
      chave: 'inteligencia',
      sigla: 'INT',
      nome: 'Inteligência'
    },
    {
      chave: 'sabedoria',
      sigla: 'SAB',
      nome: 'Sabedoria'
    },
    {
      chave: 'carisma',
      sigla: 'CAR',
      nome: 'Carisma'
    }
  ];


  // =========================================================
  // CUSTO DE ATRIBUTO
  // =========================================================

  custoAtributo(valor: number): number {

    if (valor <= 8) {
      return 0;
    }

    if (valor <= 13) {
      return valor - 8;
    }

    return 5 + ((valor - 13) * 2);
  }


  // =========================================================
  // PONTOS DISPONÍVEIS
  // =========================================================

  pontosDisponiveis = computed(() => {

    const valores = Object.values(this.atributos());

    const custoTotal = valores.reduce(
      (total, valor) => total + this.custoAtributo(valor),
      0
    );

    return Math.max(0, 27 - custoTotal);
  });


  // =========================================================
  // MODIFICADORES
  // =========================================================

  modificador(valor: number): number {

    return Math.floor((valor - 10) / 2);
  }


  modificadorFormatado(valor: number): string {

    const modificador = this.modificador(valor);

    return modificador >= 0
      ? `+${modificador}`
      : `${modificador}`;
  }


  // =========================================================
  // OBTER VALOR DO ATRIBUTO
  // =========================================================

  valorAtributo(chave: AtributoChave): number {

    return this.atributos()[chave];
  }


  // =========================================================
  // ALTERAR ATRIBUTO
  // =========================================================

  alterarAtributo(
    atributo: AtributoChave,
    quantidade: number
  ): void {

    this.atributos.update(atual => {

      const valorAtual = atual[atributo];

      const novoValor = valorAtual + quantidade;


      // Na compra de pontos, o valor máximo
      // antes de bônus raciais é 15.

      if (novoValor < 8 || novoValor > 15) {
        return atual;
      }


      const custoAtual = Object.values(atual)
        .reduce(
          (total, valor) =>
            total + this.custoAtributo(valor),
          0
        );


      const custoNovo =
        custoAtual
        - this.custoAtributo(valorAtual)
        + this.custoAtributo(novoValor);


      // Não permite ultrapassar os 27 pontos.

      if (custoNovo > 27) {
        return atual;
      }


      return {
        ...atual,
        [atributo]: novoValor
      };

    });

  }


  // =========================================================
  // PROFICIÊNCIA
  // =========================================================

  bonusProficiencia = computed(() => {

    const nivelAtual = this.nivel();

    return Math.floor((nivelAtual - 1) / 4) + 2;

  });


  // =========================================================
  // VALORES DERIVADOS
  // =========================================================

  pontosVida = computed(() => {

    const constituicao =
      this.modificador(
        this.atributos().constituicao
      );

    return 24 + (constituicao * this.nivel());

  });


  // =========================================================
  // ARMADURAS
  // =========================================================

  armaduras: Armadura[] = [

    {
      nome: 'Cota de Malha Pesada',
      descricao: '16 Fixo',
      caBase: 16,
      limiteDestreza: 0
    },

    {
      nome: 'Couro Batido',
      descricao: '12 + DES',
      caBase: 12,
      limiteDestreza: null
    }

  ];


  armaduraEquipada = signal(
    'Cota de Malha Pesada'
  );


  // =========================================================
  // ESCUDO
  // =========================================================

  escudoEquipado = signal(true);


  // =========================================================
  // CLASSE DE ARMADURA
  // =========================================================

  classeArmadura = computed(() => {

    const armadura =
      this.armaduras.find(
        item =>
          item.nome === this.armaduraEquipada()
      );


    if (!armadura) {
      return 10 +
        this.modificador(
          this.atributos().destreza
        );
    }


    const destreza =
      this.modificador(
        this.atributos().destreza
      );


    let bonusDestreza = destreza;


    if (armadura.limiteDestreza !== null) {

      bonusDestreza = Math.min(
        destreza,
        armadura.limiteDestreza
      );

    }


    const bonusEscudo =
      this.escudoEquipado()
        ? 2
        : 0;


    return (
      armadura.caBase
      + bonusDestreza
      + bonusEscudo
    );

  });


  // =========================================================
  // INICIATIVA
  // =========================================================

  iniciativa = computed(() => {

    return this.modificador(
      this.atributos().destreza
    );

  });


  // =========================================================
  // DESLOCAMENTO
  // =========================================================

  deslocamento = signal(9);


  // =========================================================
  // PERÍCIAS
  // =========================================================

  pericias = signal<Pericia[]>([

    {
      nome: 'Acrobacia',
      atributo: 'destreza',
      selecionada: false
    },

    {
      nome: 'Arcanismo',
      atributo: 'inteligencia',
      selecionada: false
    },

    {
      nome: 'Atletismo',
      atributo: 'forca',
      selecionada: true
    },

    {
      nome: 'Atuação',
      atributo: 'carisma',
      selecionada: false
    },

    {
      nome: 'Furtividade',
      atributo: 'destreza',
      selecionada: false
    },

    {
      nome: 'História',
      atributo: 'inteligencia',
      selecionada: false
    },

    {
      nome: 'Intimidação',
      atributo: 'carisma',
      selecionada: true
    },

    {
      nome: 'Intuição',
      atributo: 'sabedoria',
      selecionada: false
    },

    {
      nome: 'Investigação',
      atributo: 'inteligencia',
      selecionada: false
    },

    {
      nome: 'Medicina',
      atributo: 'sabedoria',
      selecionada: false
    },

    {
      nome: 'Natureza',
      atributo: 'inteligencia',
      selecionada: false
    },

    {
      nome: 'Percepção',
      atributo: 'sabedoria',
      selecionada: true
    },

    {
      nome: 'Persuasão',
      atributo: 'carisma',
      selecionada: false
    },

    {
      nome: 'Sobrevivência',
      atributo: 'sabedoria',
      selecionada: true
    }

  ]);


  // =========================================================
  // BÔNUS DA PERÍCIA
  // =========================================================

  bonusPericia(pericia: Pericia): number {

    const bonusAtributo =
      this.modificador(
        this.atributos()[pericia.atributo]
      );


    const bonusTreinamento =
      pericia.selecionada
        ? this.bonusProficiencia()
        : 0;


    return bonusAtributo + bonusTreinamento;

  }


  // =========================================================
  // ALTERAR PERÍCIA
  // =========================================================

  alternarPericia(index: number): void {

    this.pericias.update(lista => {

      return lista.map((pericia, i) =>
        i === index
          ? {
              ...pericia,
              selecionada:
                !pericia.selecionada
            }
          : pericia
      );

    });

  }


  // =========================================================
  // EQUIPAMENTO
  // =========================================================

  equipamentos = signal<Equipamento[]>([

    {
      nome: 'Espada Longa Versátil',
      descricao:
        '1d8 cortante (uma mão) / 1d10 (duas mãos)',
      bonus: '+5 p/ Acertar',
      equipado: true
    },

    {
      nome: 'Escudo de Aço Forjado',
      descricao:
        'Equipado na mão inábil',
      bonus: '+2 na CA',
      equipado: true
    },

    {
      nome: 'Pacote de Masmorras',
      descricao:
        'Mochila, tochas, corda e outros itens',
      bonus: 'Kit Padrão',
      equipado: false
    }

  ]);


  // =========================================================
  // ALTERAR EQUIPAMENTO
  // =========================================================

  alternarEquipamento(index: number): void {

    this.equipamentos.update(lista => {

      const novaLista = lista.map((item, i) =>
        i === index
          ? {
              ...item,
              equipado: !item.equipado
            }
          : item
      );


      const escudo =
        novaLista.find(
          item =>
            item.nome === 'Escudo de Aço Forjado'
        );


      if (escudo) {
        this.escudoEquipado.set(
          escudo.equipado
        );
      }


      return novaLista;

    });

  }


  // =========================================================
  // IDIOMAS
  // =========================================================

  idiomas = signal([

    'Comum (Comum de Faerûn)',

    'Élfico (Dialeto da Costa)'

  ]);


  // =========================================================
  // CONJURAÇÃO
  // =========================================================

  classeConjuradora = computed(() => {

    return [

      'Mago',
      'Clérigo',
      'Druida',
      'Bardo',
      'Feiticeiro',
      'Bruxo',
      'Paladino',
      'Ranger'

    ].includes(this.classe());

  });


  // =========================================================
  // RESET
  // =========================================================

  redefinirFicha(): void {

    this.nomePersonagem.set(
      'Thorne Valerius'
    );


    this.pronomes.set(
      'ele/dele'
    );


    this.raca.set(
      'Humano'
    );


    this.subraca.set(
      'Humano Variante (+1 Talento, +1 Perícia)'
    );


    this.classe.set(
      'Guerreiro'
    );


    this.subclasse.set(
      'Mestre de Batalha'
    );


    this.nivel.set(3);


    this.tendencia.set(
      'Caótico e Bom'
    );


    this.antecedente.set(
      'Soldado'
    );


    this.historia.set(
      'Veterano do Cerco de Elturel. Carrega o sinete desgastado de sua companhia caída e busca honrar a memória dos irmãos de armas enfrentando as ameaças que assolam a Costa da Espada.'
    );


    this.atributos.set({

      forca: 15,
      destreza: 14,
      constituicao: 13,
      inteligencia: 12,
      sabedoria: 10,
      carisma: 8

    });


    this.armaduraEquipada.set(
      'Cota de Malha Pesada'
    );


    this.escudoEquipado.set(true);


    this.deslocamento.set(9);


    this.pericias.set([

      {
        nome: 'Acrobacia',
        atributo: 'destreza',
        selecionada: false
      },

      {
        nome: 'Arcanismo',
        atributo: 'inteligencia',
        selecionada: false
      },

      {
        nome: 'Atletismo',
        atributo: 'forca',
        selecionada: true
      },

      {
        nome: 'Atuação',
        atributo: 'carisma',
        selecionada: false
      },

      {
        nome: 'Furtividade',
        atributo: 'destreza',
        selecionada: false
      },

      {
        nome: 'História',
        atributo: 'inteligencia',
        selecionada: false
      },

      {
        nome: 'Intimidação',
        atributo: 'carisma',
        selecionada: true
      },

      {
        nome: 'Intuição',
        atributo: 'sabedoria',
        selecionada: false
      },

      {
        nome: 'Investigação',
        atributo: 'inteligencia',
        selecionada: false
      },

      {
        nome: 'Medicina',
        atributo: 'sabedoria',
        selecionada: false
      },

      {
        nome: 'Natureza',
        atributo: 'inteligencia',
        selecionada: false
      },

      {
        nome: 'Percepção',
        atributo: 'sabedoria',
        selecionada: true
      },

      {
        nome: 'Persuasão',
        atributo: 'carisma',
        selecionada: false
      },

      {
        nome: 'Sobrevivência',
        atributo: 'sabedoria',
        selecionada: true
      }

    ]);


    this.equipamentos.set([

      {
        nome: 'Espada Longa Versátil',
        descricao:
          '1d8 cortante (uma mão) / 1d10 (duas mãos)',
        bonus: '+5 p/ Acertar',
        equipado: true
      },

      {
        nome: 'Escudo de Aço Forjado',
        descricao:
          'Equipado na mão inábil',
        bonus: '+2 na CA',
        equipado: true
      },

      {
        nome: 'Pacote de Masmorras',
        descricao:
          'Mochila, tochas, corda e outros itens',
        bonus: 'Kit Padrão',
        equipado: false
      }

    ]);


    this.idiomas.set([

      'Comum (Comum de Faerûn)',

      'Élfico (Dialeto da Costa)'

    ]);

  }

}