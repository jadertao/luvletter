import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Luvletter } from '../../utils/interface';

import { LetterService } from '../../shared/service/letter.service';

export interface Fruit {
  name: string;
}
@Component({
  selector: 'luv-letter-post',
  templateUrl: './letter-post.component.html',
  styleUrls: ['./letter-post.component.scss']
})
export class LetterPostComponent implements OnInit {

  avator = '../../../assets/avator.jpg';

  constructor(
    private letterService: LetterService,
  ) {
  }

  isVisible = false;
  isOkLoading = false;

  moods = ['moodA', 'moodB', 'moodC', 'moodD', 'moodE'];
  tags = ['tagA', 'tagB', 'tagC', 'tagD', 'tagE'];

  selectedMood = null;
  selectedTags = [];

  @ViewChild('input')
  _content: ElementRef;

  get content() {
    return this._content.nativeElement.value;
  }

  set content(value) {
    this._content.nativeElement.value = value;
  }

  handleChangeMood(checked: boolean, mood: string): void {
    console.log(checked, mood);
    if (checked) {
      this.selectedMood = mood;
    } else {
      this.selectedMood = null;
    }
  }

  handleChangeTags(checked: boolean, tag: string): void {
    if (checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    window.setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
      this.post({ content: this.content, tag: this.selectedTags, mood: this.selectedMood });
      this.trancate();
    }, 2000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  post(letter) {
    // console.log(letter);
    this.letterService.post(letter);
  }

  trancate() {
    this.selectedMood = null;
    this.selectedTags = [];
    this.content = '';
  }

  ngOnInit() {
  }
}
