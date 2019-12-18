import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Album } from '../model';
import { AlbumService } from '../album.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums$ : Observable<Album[]>;
  @Output() albumChanged = new EventEmitter();

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albums$ = this.albumService.getAlbums();
  }

  onAlbumSelected(albumId: number) {
    this.albumChanged.emit(albumId);
  }
}
