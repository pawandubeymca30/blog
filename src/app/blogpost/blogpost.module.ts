import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
// import { PostsComponent } from './posts/posts.component';
// import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsComponent ,PostDetailComponent  } from './../blogpost/index';
import { MaterialModule } from "../_shared/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BlogService } from '../_services/blog.service';


@NgModule({
  imports: [
    CommonModule,
    BlogpostRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [BlogService],
  declarations: [PostsComponent, PostDetailComponent]
})
export class BlogpostModule { }
