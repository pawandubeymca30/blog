import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogpostModule } from './blogpost/blogpost.module';

const routes: Routes = [
  {
    path: "blog",
    loadChildren: () => BlogpostModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
