import { Component, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';
import { NoteService } from './../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LandingPageComponent implements OnInit {
  note = { text: '', date: Date.now() };
  notes = [];

  constructor(private _router: Router, private _noteService: NoteService) {

  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this._noteService.getAllNotes( (n) => {
      this.notes = n;


      console.log('all notes gotten', this.notes);
    });
  }

  onSubmit() {
    this._noteService.sendData(this.note);
    this.getAll();
    this._router.navigate(['']);
    this.note = { text: '', date: Date.now() };
  }

}
