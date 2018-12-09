<template>
    <li>
      <RouterLink :to="`/students/${student.id}`">
        {{student.name}}
      </RouterLink>

      <TrackDisplay :trackId="student.trackId" />
    </li>
</template>

<script>
import TrackDisplay from '../tracks/TrackDisplay';
export default {
  props: {
    student: null
  },
  components: {
    TrackDisplay
  }
};
</script>

<style>

</style>