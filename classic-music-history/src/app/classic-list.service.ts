import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'
import { Music } from './music';


@Injectable({
  providedIn: 'root'
})

export class ClassicListService {

  BASE_URL: string = 'https://api.openopus.org/'
  composers: string[];

  constructor(private http: HttpClient) { }

  getComposerList(): Observable<Music> {
    return this.http.get<Music>(this.BASE_URL + 'composer/list/pop.json')
  }
}
