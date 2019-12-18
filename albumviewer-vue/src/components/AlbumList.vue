<template>
  <div>
      <ul>
          <li
            v-for="album in albums"
            v-bind:key="album.id"
            v-on:click="onAlbumSelected(album.id)">
              {{ album.title }}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'albumlist',
  data() {
    return  {
      albums: [],
    };
  },
  methods: {
      onAlbumSelected(albumId) {
          this.$emit('albumChanged', albumId);
      }
  },
  async created() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums")
        .then((x) => x.json());
    this.albums = response;
  },
  components: {
  }
}
</script>

<style>
</style>

