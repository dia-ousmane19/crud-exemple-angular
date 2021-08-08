import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditComponent } from './edit/edit.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'posts' ,pathMatch : 'full' },
  { path: 'posts', component: PostComponent },
  { path: 'create', component: CreatePostComponent },
  { path: 'posts/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
