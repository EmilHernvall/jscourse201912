import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  albumId: number = 0;

  onAlbumSelected(albumId: number) {
    console.log("onAlbumSelected", albumId);
    this.albumId = albumId;
  }
}
