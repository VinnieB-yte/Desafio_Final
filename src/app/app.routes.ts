import { Routes } from '@angular/router';
import { Home } from './pages/home/home';



export const routes: Routes = [

    { path: "", component:Home },
    //{ path: 'personagem', component: Personagem },
    //{ path: 'perfil', component: Perfil },
    //{ path: 'forum', component: Forum },
    { path: "", redirectTo: "home", pathMatch: "full" }

];
