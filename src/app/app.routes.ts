import { Routes } from '@angular/router';
import { BuscaComponent } from './busca/busca.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CestaComponent } from './cesta/cesta.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { LoginComponent } from './login/login.component';
import { VitrineComponent } from './vitrine/vitrine.component';


export const routes: Routes = [
    {path:"", component:VitrineComponent},
    {path:"busca", component:BuscaComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"cesta", component:CestaComponent},
    {path:"detalhe", component:DetalheComponent},
    {path:"login", component:LoginComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"busca", component:BuscaComponent}
];
