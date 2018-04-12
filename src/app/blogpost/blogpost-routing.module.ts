import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: "posts", component: PostsComponent   },
  { path: "posts/:id", component: PostsComponent },
  { path: "post/:id", component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogpostRoutingModule { }
