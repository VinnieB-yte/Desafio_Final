import { Component, computed, signal } from '@angular/core';
import { Header } from '../../../shared/header/header';
import { Footer } from '../../../shared/footer/footer';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-dnd5',
  standalone: true,
  imports: [Header, Footer, FormsModule, KeyValuePipe],
  templateUrl: './dnd5.html',
  styleUrl: './dnd5.css',
})

export class Dnd5 {

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

}

