import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostItemComponent } from './post/post-item/post-item.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { EditorComponent } from './editor/editor.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PostItemComponent,
    PostListComponent,
    ScrollToTopComponent,
    EditorComponent,
  ],
  providers: [
  ],
  exports: [
    PostItemComponent,
    PostListComponent,
    ScrollToTopComponent,
    EditorComponent,
  ],
})
export class BasicModule { }
