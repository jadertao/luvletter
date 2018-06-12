import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostItemComponent } from './post/post-item/post-item.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { EditorComponent } from './editor/editor.component';
import { ButtonComponent } from './button/button.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { LoadingBarService } from './loading-bar/loading-bar.service';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PostItemComponent,
    PostListComponent,
    ScrollToTopComponent,
    EditorComponent,
    ButtonComponent,
    LoadingBarComponent,
    NavbarComponent,
  ],
  providers: [
    LoadingBarService,
  ],
  exports: [
    PostItemComponent,
    PostListComponent,
    ScrollToTopComponent,
    EditorComponent,
    ButtonComponent,
    LoadingBarComponent,
    NavbarComponent,
  ],
})
export class BasicModule { }
