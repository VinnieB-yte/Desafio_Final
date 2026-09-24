import { Component, signal, computed } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-perfil',
  imports: [Header, Footer, RouterLink],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})

export class Perfil {

  usuario = signal({
    nome: 'Merlin Ravens',
    username: '@merlinrpg',
    pronome: 'ELE/DELE',
    bio: 'Jogador e mestre há 6 anos. Apaixonado por campanhas investigativas, intriga arcana e fantasia sombria.',
    avatar: 'assets/images/avatar-merlin.png',
    plano: 'Plano Gratuito (Aventureiro)'
  });

temas = [
  {
    id: 'arcano',
    nome: 'Arcano Dourado',
    primary: '#FBBF24',
    secondary: '#07142B',
    accent: '#FCD34D',
    banner: 'assets/images/themes/banner-arcano.png'
  },
  {
    id: 'vampiro',
    nome: 'Sangue Ancestral',
    primary: '#DC2626',
    secondary: '#190707',
    accent: '#F87171',
    banner: 'assets/images/themes/banner-vampiro.png'
  },
  {
    id: 'cosmico',
    nome: 'Éter Cósmico',
    primary: '#14B8A6',
    secondary: '#091C2A',
    accent: '#8B5CF6',
    banner: 'assets/images/themes/banner-cosmico.png'
  },
  {
    id: 'druida',
    nome: 'Bosque dos Druidas',
    primary: '#22C55E',
    secondary: '#062A21',
    accent: '#A3E635',
    banner: 'assets/images/themes/banner-druida.png'
  },
  {
    id: 'neon',
    nome: 'Neon Arcano',
    primary: '#3B82F6',
    secondary: '#0A1630',
    accent: '#A855F7',
    banner: 'assets/images/themes/banner-neon.png'
  }
];

  personagens = signal([
  {
    id: 1,
    nome: 'Valerius Ash',
    sistema: 'D&D 5E',
    classe: 'Paladino Humano',
    subtitulo: 'Juramento da Devoção',
    imagem: 'assets/images/characters/valerius.png',
    vida: '48/48',
    atributo1: '18 CA',
    atributo1Nome: 'Classe Armadura',
    ultimaAtualizacao: 'Modificado há 2 dias',
    detalhe: 'Força +3 | Carisma +3',
    cor: '#F59E0B'
  },
  {
    id: 2,
    nome: 'Dr. Arthur Pendleton',
    sistema: 'CALL OF CTHULHU 7E',
    classe: 'Professor de Arqueologia',
    subtitulo: 'Universidade Miskatonic',
    imagem: 'assets/images/characters/arthur.png',
    vida: '65/99',
    atributo1: '70%',
    atributo1Nome: 'Ocultismo',
    ultimaAtualizacao: 'Modificado ontem',
    detalhe: 'Cthulhu Mythos 14%',
    cor: '#7C3AED'
  }
]);

  limitePersonagens = signal(3);

  temaAtual = signal(this.temas[0]);

  painelTemaAberto = signal(false);

  togglePainelTema() {
    this.painelTemaAberto.update(v => !v);
  }

  fecharPainelTema() {
    this.painelTemaAberto.set(false);
  }
}

