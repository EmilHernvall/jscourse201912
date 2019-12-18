import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AlbumService } from '../album.service';
import { Observable } from 'rxjs';
import { Photo } from '../model';

@Component({
  selector: 'app-album-viewer',
  templateUrl: './album-viewer.component.html',
  styleUrls: ['./album-viewer.component.css']
})
export class AlbumViewerComponent 
  implements OnInit, OnChanges {

  @Input() albumId: number;
  photos$: Observable<Photo[]>;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.photos$ = this.albumService.getPhotos(
      this.albumId
    );
  }
}
