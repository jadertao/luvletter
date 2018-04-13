import { PostlistComponent } from './post/postlist/postlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostitemComponent } from './post/postitem/postitem.component';
import { EditorComponent } from './editor/editor.component';
import { ButtonComponent } from './button/button.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PostitemComponent,
    PostlistComponent,
    EditorComponent,
    ButtonComponent,
    LoadingBarComponent,
],
  exports: [
    PostlistComponent,
    EditorComponent,
    ButtonComponent,
    LoadingBarComponent,
  ]
})
export class SharedModule { }
