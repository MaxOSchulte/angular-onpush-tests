import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultContainerComponent } from './default/default-container/default-container.component';
import { OnpushContainerComponent } from './onpush/onpush-container/onpush-container.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'default'},
  {path: 'default', component: DefaultContainerComponent},
  {path: 'onpush', component: OnpushContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
