import { Routes } from '@angular/router';
import { Index } from './pages/index';

export const routes: Routes = [

    { path: "index", component:Index },
    { path: "", redirectTo: "index", pathMatch: "full" }

];
