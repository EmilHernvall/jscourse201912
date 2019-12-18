import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Photo } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(
      "https://jsonplaceholder.typicode.com/albums"
    );
  }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(
      "https://jsonplaceholder.typicode.com/photos?albumId=" + albumId,
    );
  }
}
