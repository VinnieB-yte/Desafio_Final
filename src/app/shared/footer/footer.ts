import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

documentoAberto = signal<
    'termos' | 'privacidade' | 'diretrizes' | null
  >(null);

  abrirDocumento(
    documento: 'termos' | 'privacidade' | 'diretrizes'
  ): void {
    this.documentoAberto.set(documento);
  }

  fecharDocumento(): void {
    this.documentoAberto.set(null);
  }


}
