import { PostlistComponent } from './post/postlist/postlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostitemComponent } from './post/postitem/postitem.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PostitemComponent,
    PostlistComponent,
    EditorComponent,
],
  exports: [
    PostlistComponent,
    EditorComponent,
  ]
})
export class SharedModule { }
