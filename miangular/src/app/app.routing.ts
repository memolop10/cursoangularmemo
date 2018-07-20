import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NosotrosComponent} from './nosotros/nosotros.component';
import {ContactoComponent} from './contacto/contacto.component';

const appRoutes:Routes = [

    {path:'home', component: HomeComponent},
    {path:'nosotros', component: NosotrosComponent},
    {path:'contacto', component: ContactoComponent}

    // localhost:4200/home
];

        export const routing = RouterModule.forRoot(appRoutes);