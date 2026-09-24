import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Personagem } from './pages/personagem/personagem';
import { Perfil } from './pages/perfil/perfil';
import { Forum } from './pages/forum/forum';
import { Dnd5 } from './pages/criar-personagem/dnd5/dnd5';
import { CallofCthulhu } from './pages/criar-personagem/callof-cthulhu/callof-cthulhu';
import { Pathfinder } from './pages/criar-personagem/pathfinder/pathfinder';
import { Tormenta20 } from './pages/criar-personagem/tormenta20/tormenta20';
import { Vampiro } from './pages/criar-personagem/vampiro/vampiro';



export const routes: Routes = [

    { path: "", redirectTo: "login", pathMatch: "full" },

    { path: "login", component:Login },
    
    { path: "cadastro", component:Cadastro },
    { path: "home", component:Home },
    { path: 'personagem', component: Personagem },
    { path: 'perfil', component: Perfil },
    { path: 'forum', component: Forum },
    { path: 'criar-personagem/dnd5', component: Dnd5 },
    { path: 'criar-personagem/callof-cthulhu', component: CallofCthulhu },
    { path: 'criar-personagem/pathfinder', component: Pathfinder },
    { path: 'criar-personagem/tormenta20', component: Tormenta20 },
    { path: 'criar-personagem/vampiro', component: Vampiro },

];
