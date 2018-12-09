<template>
  <span v-if="track">
    {{track.name}}
  </span>
</template>

<script>
import api from '../../services/api';
export default {
  props: {
    trackId: Number
  },
  data() {
    return {
      track: null
    };
  },
  created() {
    api.getTracks()
      .then(tracks => {
        this.track = tracks.find(track => track.id === this.trackId);
      });
  }
};
</script>