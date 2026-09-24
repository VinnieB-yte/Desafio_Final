import { AfterViewInit, Component, ElementRef, signal, ViewChild, computed } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [Header, Footer, RouterLink],
  templateUrl: './forum.html',
  styleUrl: './forum.css'
})
export class Forum implements AfterViewInit{

  mestresOnline = signal(1420);

  pesquisa = signal('');

  categorias = [
  { nome: 'Todos', total: 16 },

  { nome: 'Fantasia Medieval', total: 5 },

  { nome: 'Horror & Investigação', total: 3 },

  { nome: 'Ficção Científica', total: 3 },

  { nome: 'Fantasia Urbana', total: 2 },

  { nome: 'Homebrew', total: 2 },

  { nome: 'Tavern Talks', total: 1 }
];

  enclaves = [

  {
    categoria:'Fantasia Medieval',
    nome:'Dungeons & Dragons 5e',
    cor:'#FBBF24',
    icone:'shield',
    descricao:'Builds, subclasses, aventuras, monstros e regras opcionais.',
    membros:'4.284',
    posts:'18.402',
    ultimo:'Como balancear encontros para três conjuradores?'
  },

  {
    categoria:'Fantasia Medieval',
    nome:'Tormenta20',
    cor:'#FB923C',
    icone:'castle',
    descricao:'Arton, deuses, distinções, ameaças e campanhas épicas.',
    membros:'2.931',
    posts:'11.147',
    ultimo:'Nova Distinção para Inventores.'
  },

  {
    categoria:'Fantasia Medieval',
    nome:'Pathfinder 2ª Edição',
    cor:'#F97316',
    icone:'swords',
    descricao:'Classes, talentos, ancestrais e aventuras em Golarion.',
    membros:'2.114',
    posts:'8.390',
    ultimo:'Melhor build de Magus para nível 10.'
  },

  {
    categoria:'Fantasia Medieval',
    nome:'Old Dragon 2',
    cor:'#A16207',
    icone:'history_edu',
    descricao:'OSR brasileiro, aventuras clássicas e módulos antigos.',
    membros:'1.180',
    posts:'3.842',
    ultimo:'Conversão de aventuras AD&D para OD2.'
  },

  {
    categoria:'Fantasia Medieval',
    nome:'Forbidden Lands',
    cor:'#65A30D',
    icone:'forest',
    descricao:'Exploração, sobrevivência e fantasia sombria.',
    membros:'742',
    posts:'1.905',
    ultimo:'Hexcrawl perfeito para iniciantes.'
  },

  {
    categoria:'Horror & Investigação',
    nome:'Call of Cthulhu',
    cor:'#8B5CF6',
    icone:'visibility',
    descricao:'Mistérios, sanidade e horror cósmico Lovecraftiano.',
    membros:'1.509',
    posts:'6.890',
    ultimo:'Melhores trilhas sonoras para horror.'
  },

  {
    categoria:'Horror & Investigação',
    nome:'Ordem Paranormal RPG',
    cor:'#22C55E',
    icone:'psychology_alt',
    descricao:'Criaturas, Relíquias, Ocultismo e campanhas paranormais.',
    membros:'3.502',
    posts:'13.221',
    ultimo:'Como criar um Cultista memorável.'
  },

  {
    categoria:'Horror & Investigação',
    nome:'Vaesen',
    cor:'#64748B',
    icone:'pets',
    descricao:'Folclore nórdico, investigação sobrenatural e criaturas antigas.',
    membros:'684',
    posts:'1.540',
    ultimo:'Campanha inspirada no folclore brasileiro.'
  },

  {
    categoria:'Ficção Científica',
    nome:'Cyberpunk RED',
    cor:'#38BDF8',
    icone:'memory',
    descricao:'Netrunners, implantes, megacorporações e Night City.',
    membros:'1.027',
    posts:'4.202',
    ultimo:'Implantes favoritos da comunidade.'
  },

  {
    categoria:'Ficção Científica',
    nome:'Starfinder',
    cor:'#a304ff',
    icone:'rocket_launch',
    descricao:'Ópera espacial, tecnologia e magia futurista.',
    membros:'913',
    posts:'3.145',
    ultimo:'Build de Operative Sniper.'
  },

  {
    categoria:'Ficção Científica',
    nome:'Traveller',
    cor:'#2563EB',
    icone:'public',
    descricao:'Exploração espacial, comércio e impérios galácticos.',
    membros:'568',
    posts:'1.322',
    ultimo:'Gerando setores automaticamente.'
  },

  {
    categoria:'Fantasia Urbana',
    nome:'Vampiro: A Máscara V5',
    cor:'#DC2626',
    icone:'bloodtype',
    descricao:'Clãs, disciplinas, política vampírica e Crônicas.',
    membros:'1.844',
    posts:'7.421',
    ultimo:'Como interpretar um Tremere?'
  },

  {
    categoria:'Fantasia Urbana',
    nome:'Mago: A Ascensão',
    cor:'#7C3AED',
    icone:'auto_fix_high',
    descricao:'Tradições, Paradigmas, Esferas e realidade.',
    membros:'1.014',
    posts:'3.808',
    ultimo:'Paradigmas mais criativos dos jogadores.'
  },

  {
    categoria:'Homebrew',
    nome:'Sistemas Próprios',
    cor:'#22C55E',
    icone:'auto_awesome',
    descricao:'Crie regras, classes, raças e mecânicas inéditas.',
    membros:'3.718',
    posts:'15.632',
    ultimo:'Sistema Grimórios Vivos versão 2.1.'
  },

  {
    categoria:'Homebrew',
    nome:'Bestiário & Itens',
    cor:'#ff00bf',
    icone:'menu_book',
    descricao:'Monstros, armas mágicas, feitiços e equipamentos criados pela comunidade.',
    membros:'2.403',
    posts:'8.117',
    ultimo:'100 monstros para campanhas medievais.'
  },

  {
    categoria:'Tavern Talks',
    nome:'A Taverna Geral',
    cor:'#EAB308',
    icone:'forum',
    descricao:'Converse sobre campanhas, memes, histórias e tudo sobre RPG.',
    membros:'6.120',
    posts:'24.510',
    ultimo:'Qual foi o maior TPK da sua mesa?'
  }

];

cronicas = [
  {
    id: 1,
    sistema: 'D&D 5e',
    cor: '#FBBF24',
    autor: 'Merlin Ravens',
    cargo: 'Mestre da Taverna',
    avatar: 'assets/images/avatar-merlin.png',
    tempo: 'há 15 minutos',
    titulo: 'Como balancear encontros para um grupo com três conjuradores?',
    resumo: 'Estou preparando uma campanha nível 8 e o grupo possui dois magos e um clérigo. Como vocês ajustariam a economia de ações?',
    comentarios: 48,
    curtidas: 112,
    visualizacoes: 820
  },

  {
    id: 2,
    sistema: 'Tormenta20',
    cor: '#FB923C',
    autor: 'Lyra Arton',
    cargo: 'Cronista',
    avatar: 'assets/images/avatar-lyra.png',
    tempo: 'há 1 hora',
    titulo: 'Nova Distinção Homebrew para Inventores.',
    resumo: 'Criei uma Distinção inspirada nos Engenheiros Goblins de Arton. Gostaria de feedback da comunidade.',
    comentarios: 34,
    curtidas: 89,
    visualizacoes: 590
  },

  {
    id: 3,
    sistema: 'Call of Cthulhu',
    cor: '#8B5CF6',
    autor: 'Elias Arkham',
    cargo: 'Investigador',
    avatar: 'assets/images/avatar-elias.png',
    tempo: 'há 2 horas',
    titulo: 'As melhores trilhas sonoras para campanhas Lovecraftianas.',
    resumo: 'Separei uma lista de músicas ambientes para aumentar a tensão durante sessões de horror cósmico.',
    comentarios: 27,
    curtidas: 76,
    visualizacoes: 421
  },

  {
    id: 4,
    sistema: 'Vampiro V5',
    cor: '#DC2626',
    autor: 'Lady Carmilla',
    cargo: 'Anciã',
    avatar: 'assets/images/avatar-carmilla.png',
    tempo: 'há 3 horas',
    titulo: 'Como interpretar um Tremere sem cair em estereótipos?',
    resumo: 'Quero um personagem político e manipulador, mas sem parecer um vilão genérico.',
    comentarios: 58,
    curtidas: 141,
    visualizacoes: 1032
  },

  {
    id: 5,
    sistema: 'Homebrew',
    cor: '#22C55E',
    autor: 'Vael Arcanist',
    cargo: 'Alquimista de Sistemas',
    avatar: 'assets/images/avatar-vael.png',
    tempo: 'há 5 horas',
    titulo: 'Sistema Grimórios Vivos versão 2.1 disponível para testes.',
    resumo: 'Atualizei o sistema com progressão por Relíquias Arcanas e novos atributos de Essência.',
    comentarios: 92,
    curtidas: 220,
    visualizacoes: 1745
  },

  {
  id: 6,
  sistema: 'Cyberpunk RED',
  cor: '#38BDF8',
  autor: 'Ilyiana Hex',
  cargo: 'Netrunner',
  avatar: 'assets/images/avatar-ilyiana.png',
  tempo: 'há 8 horas',
  titulo: 'Guia definitivo de Netrunning para campanhas iniciantes',
  resumo: 'Montei um passo a passo para mestres e jogadores entenderem as invasões de rede sem deixar o combate lento. Inclui mapas de arquitetura, dicas de ICE e exemplos práticos.',
  comentarios: 61,
  curtidas: 154,
  visualizacoes: 1298
}

];

  categoriaSelecionada = signal("Todos");

  selecionarCategoria(nome: string){
    this.categoriaSelecionada.set(nome);

  }

   @ViewChild('carousel')
  carousel!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.carousel.nativeElement.addEventListener(
      'scroll',
      () => this.atualizarBarra()
    );
  }

  atualizarBarra() {

    const slider = this.carousel.nativeElement;
    const thumb = document.querySelector('.carousel-thumb') as HTMLElement;

    const progresso =
      slider.scrollLeft / (slider.scrollWidth - slider.clientWidth);

    thumb.style.transform =
      `translateX(${progresso * 185}%)`;
  }

  enclavesFiltrados = computed(() => {

  const categoria = this.categoriaSelecionada();
  const texto = this.pesquisa().toLowerCase().trim();

  let lista = this.enclaves;

  // Filtro da categoria
  if (categoria !== 'Todos') {
    lista = lista.filter(enclave =>
      enclave.categoria === categoria
    );
  }

  // Filtro da pesquisa
  if (texto !== '') {
    lista = lista.filter(enclave =>

      enclave.nome.toLowerCase().includes(texto) ||

      enclave.descricao.toLowerCase().includes(texto) ||

      enclave.ultimo.toLowerCase().includes(texto)

    );
  }

  return lista;

});

cronicasFiltradas = computed(() => {

  const categoria = this.categoriaSelecionada();
  const texto = this.pesquisa().toLowerCase().trim();

  let lista = this.cronicas;

  // Categoria
  if (categoria !== 'Todos') {

    lista = lista.filter(cronica => {

      switch (categoria) {

        case 'Fantasia Medieval':
          return [
            'D&D 5e',
            'Tormenta20',
            'Pathfinder 2ª Edição',
            'Old Dragon 2',
            'Forbidden Lands'
          ].includes(cronica.sistema);

        case 'Horror & Investigação':
          return [
            'Call of Cthulhu',
            'Ordem Paranormal RPG',
            'Vaesen'
          ].includes(cronica.sistema);

        case 'Ficção Científica':
          return [
            'Cyberpunk RED',
            'Starfinder',
            'Traveller'
          ].includes(cronica.sistema);

        case 'Fantasia Urbana':
          return [
            'Vampiro V5',
            'Mago: A Ascensão'
          ].includes(cronica.sistema);

        case 'Homebrew':
          return cronica.sistema === 'Homebrew';

        case 'Tavern Talks':
          return cronica.sistema === 'Tavern Talks';

        default:
          return true;
      }

    });

  }

  // Pesquisa
  if (texto !== '') {

    lista = lista.filter(cronica =>

      cronica.titulo.toLowerCase().includes(texto) ||

      cronica.resumo.toLowerCase().includes(texto) ||

      cronica.autor.toLowerCase().includes(texto) ||

      cronica.sistema.toLowerCase().includes(texto)

    );

  }

  return lista;


});

}