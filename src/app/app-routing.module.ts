import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListVolComponent} from "./pages/list-vol/list-vol.component";
import {FicheVolComponent} from "./pages/fiche-vol/fiche-vol.component";

const routes: Routes = [
  {
    path: '',
    component: ListVolComponent
  },
  {
    path: 'vol/:id',
    component: FicheVolComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
