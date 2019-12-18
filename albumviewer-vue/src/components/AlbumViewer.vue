<template>
  <div>
    <table>
      <tr v-for="photo in photos" v-bind:key="photo.id">
        <td><img v-bind:src="photo.thumbnailUrl" /></td>
        <td>{{ photo.title }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'albumviewer',
  props: ["albumId"],
  data() {
    return {
      photos: [],
    };
  },
  watch: {
    async albumId(newId) {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + newId)
          .then((x) => x.json());
      this.photos = response;
    }
  },
  components: {
  }
}
</script>

<style>
</style>

