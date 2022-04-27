import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/songs.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private api: ApiService) {}

  getSongs() {
    return this.api
      .get('songs')
  }
}
