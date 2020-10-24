import { Component, OnInit } from '@angular/core';
import { Music } from '../music'
import { ClassicListService } from '../classic-list.service'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  music: Music;
  names: string[];

  constructor(private classiclistservice: ClassicListService) { }

  ngOnInit(): void {
    this.getComposer();
  }

  getComposer() {
    this.classiclistservice.getComposerList()
      .subscribe((music: Music) => {
        this.music = music;
        this.names = new Array;
        this.music.composers.forEach(composer => this.names.push(composer.name))
      })
  }
}

