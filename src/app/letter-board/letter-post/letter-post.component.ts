import { Component, OnInit, Inject, NgZone, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Luvletter } from '../../utils/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
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
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: string[] = [];
  private letterForm: FormGroup;

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(
    public dialogRef: MatDialogRef<LetterPostComponent>,
    private fb: FormBuilder,
    private ngZone: NgZone,
    private letterService: LetterService,
    // @Inject(MAT_DIALOG_DATA) public data: Luvletter,
  ) {
    this.createForm();
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(mood: string): void {
    const index = this.tags.indexOf(mood);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  createForm() {
    this.letterForm = this.fb.group({
      mood: ['', Validators.required],
      content: ['', Validators.required],
    });
  }
  post() {
    const { mood, content } = this.letterForm.value;
    const letter = { mood, content, tag: this.tags };
    console.log(letter);
    this.letterService.post(letter);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
