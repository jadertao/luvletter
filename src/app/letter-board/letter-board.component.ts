import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LetterPostComponent } from './letter-post/letter-post.component';

@Component({
  selector: 'luv-letter-board',
  templateUrl: './letter-board.component.html',
  styleUrls: ['./letter-board.component.scss']
})
export class LetterBoardComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LetterPostComponent, {
      width: '1000px',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ngOnInit() {
  }

}
