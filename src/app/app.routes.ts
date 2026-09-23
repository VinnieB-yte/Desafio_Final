import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Personagem } from './pages/personagem/personagem';



export const routes: Routes = [

    { path: "", component:Login },
    { path: "cadastro", component:Cadastro },
    { path: "home", component:Home },
    { path: 'personagem', component: Personagem },
    //{ path: 'perfil', component: Perfil },
    //{ path: 'forum', component: Forum },
    { path: "", redirectTo: "home", pathMatch: "full" }

];
