import React from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumList from './AlbumList';
import AlbumViewer from './AlbumViewer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  onAlbumSelected(albumId) {
    this.setState({
      albumId: albumId,
    });
  }

  render() {
    const { albumId } = this.state;
    return (
      <div className="App">
        <div className="album-list">
          <AlbumList
            onAlbumSelected={ (albumId) => this.onAlbumSelected(albumId) }
            ></AlbumList>
        </div>
        <div className="album-viewer">
          <AlbumViewer albumId={ albumId }>
          </AlbumViewer>
        </div>
      </div>
    );
  }
}

export default App;
