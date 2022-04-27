import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Customer, Representative, SongModel } from 'src/app/model/songs.model';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  songsUrl = [
    'https://api.hookselect.com/api/audio/play/1acc1191-b9b2-4332-9f95-5836ab943376',
    'https://api.hookselect.com/api/audio/play/c55daa53-1049-490e-9c98-99e782d952e1',
    'https://api.hookselect.com/api/audio/play/56f42bac-454c-478b-b063-d3728b7eb86c',
    'https://api.hookselect.com/api/audio/play/b6d84e2c-5295-4cc4-81c9-89997605f3ae',
    'https://api.hookselect.com/api/audio/play/098b4fa6-5120-4c66-88ca-7a5b5496d5d5',
    'https://api.hookselect.com/api/audio/play/964e0c3a-7229-4474-ab65-cb4d12223a12',
  ];

  selectedPageoptions: boolean = false;
  pageOptions: SelectItem[] = [
    {
      label: 'Scrollable',
      value: false,
    },
    {
      label: 'Pageable',
      value: true,
    },
  ];

  selectedSortOptions: string = 'single';
  sortOptions: SelectItem[] = [
    {
      label: 'Single',
      value: 'single',
    },
    {
      label: 'Multiple',
      value: 'multiple',
    },
  ];

  songs: any[] = [];

  selectedCustomers: Customer[] = [];

  representatives: Representative[] = [];

  statuses: any[] = [];

  loading: boolean = true;

  @ViewChild('dt') table!: Table;

  constructor(
    private songService: SongsService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.songService.getSongs().subscribe(
      (songs: any) => {
        this.songs = songs;
        this.loading = false;
        console.log(songs);
      },
      (err) => {
        alert('Please start server');
        this.loading = false;
      }
    );
  }

  clear(dt: any) {
    this.table.clear();
  }
  play(song: any) {
    let lrec = song.lrec;
    let url = this.songsUrl[lrec % 5];
    let audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
  }
}
