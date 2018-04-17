import { PostlistComponent } from './post/postlist/postlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostitemComponent } from './post/postitem/postitem.component';
import { EditorComponent } from './editor/editor.component';
import { ButtonComponent } from './button/button.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { LoadingBarService } from './loading-bar/loading-bar.service';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

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
    ScrollToTopComponent,
  ],
  providers: [
    LoadingBarService,
  ],
  exports: [
    PostlistComponent,
    EditorComponent,
    ButtonComponent,
    LoadingBarComponent,
    ScrollToTopComponent,
  ]
})
export class SharedModule { }
