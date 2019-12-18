<template>
  <div id="app">
    <div class="album-list">
      <AlbumList v-on:albumChanged="onAlbumSelected($event)"></AlbumList>
    </div>
    <div class="album-viewer">
      <AlbumViewer v-bind:albumId="albumId"></AlbumViewer>
    </div>
  </div>
</template>

<script>
import AlbumList from './components/AlbumList';
import AlbumViewer from './components/AlbumViewer';

export default {
  name: 'app',
  data() {
    return {
      albumId: 0,
    };
  },
  methods: {
    onAlbumSelected(albumId) {
      console.log("App.onAlbumSelected", albumId);
      this.albumId = albumId;
    }
  },
  components: {
    AlbumList,
    AlbumViewer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}
.album-list {
  width: 200px;
}
.album-viewer {
  flex: 1;
}
</style>
