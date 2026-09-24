import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const usuarioLogado = localStorage.getItem('usuarioLogado');

  if (usuarioLogado) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
