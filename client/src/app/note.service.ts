import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoteService {

  constructor(private _http: HttpClient) { }

  sendData(data) {
    console.log('in service', data);
    this._http.post('/notes', data).subscribe(
      success => {console.log('success!'); } ,
      err => {console.log(err); }
    );
  }

  getAllNotes(callback) {
    console.log('grab all notes');
    return this._http.get('/notes').subscribe(
      success => {callback(success) ; } ,
      err => {console.log(err); }
    );
  }
}

