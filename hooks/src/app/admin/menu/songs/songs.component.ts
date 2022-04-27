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
    this.songService.getSongs().subscribe((songs : any) => {
      this.songs = songs;
      this.loading = false;
      console.log(songs);
    });

  }

  clear(dt : any) {
    this.table.clear();
  }
}
