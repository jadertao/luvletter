import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { PartialLetter, Luvletter } from '../../utils/interface';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'luv-letter-post',
  templateUrl: './letter-post.component.html',
  styleUrls: ['./letter-post.component.scss']
})
export class LetterPostComponent implements OnInit {

  constructor(
  ) {
  }

  @Input()
  set isOkLoading(value: boolean) {
    const visible = Boolean(value);
    if (this.okLoadingSource.value !== visible) {
      this.okLoadingSource.next(visible);
      this.isOkLoadingChange.emit(visible);
    }
  }
  get isOkLoading(): boolean {
    return this.okLoadingSource.value;
  }

  @Input()
  moods: string[];
  @Input()
  tags: string[];
  @Input()
  error: string;

  @Input()
  handleOk: (l: PartialLetter, cb?: () => void) => void;
  @Input()
  onShowModal?: () => void;

  @Input()
  toggleVisible: () => void;


  @Input()
  set isVisible(value: boolean) {
    const visible = Boolean(value);
    if (this.visibleSource.value !== visible) {
      this.visibleSource.next(visible);
      this.isVisibleChange.emit(visible);
    }
  }
  get isVisible(): boolean {
    return this.visibleSource.value;
  }

  @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter();
  @Output() isOkLoadingChange: EventEmitter<boolean> = new EventEmitter();

  visibleSource = new BehaviorSubject<boolean>(false);
  okLoadingSource = new BehaviorSubject<boolean>(false);

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

  handleCancel = () => {
    this.toggleVisible();
  }

  showModal(): void {
    if (this.onShowModal) {
      this.onShowModal();
    }
    this.toggleVisible();
  }

  onOk = (): void => {
    this.handleOk({ content: this.content, tags: this.selectedTags, mood: this.selectedMood }, this.trancate);
  }

  trancate = () => {
    this.selectedMood = null;
    this.selectedTags = [];
    this.content = '';
  }

  ngOnInit() {
  }
}
