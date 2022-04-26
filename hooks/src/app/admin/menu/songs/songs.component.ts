import { Component, OnInit } from '@angular/core';
import { SongModel } from 'src/app/model/songs.model';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
})
export class SongsComponent implements OnInit {
  songs: SongModel[] = [];
  sortOptions: string[] = ['single','multiple'];
  selectedSortOptions: string = 'single';

  constructor(private songService: SongsService) {}

  ngOnInit(): void {
    this.songs = [];
    for (let i = 0; i < 100; i++) {
      let model = new SongModel();
      model.artist = 'Artist ' + (i + 1);
      model.title = 'Title ' + (i + 1);
      this.songs.push(model);
    }
  }
}
