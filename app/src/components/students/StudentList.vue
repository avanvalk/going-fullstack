<template>
  <ul v-if="students">
    <li v-for="student in students" :key="student.id">
      <RouterLink :to="`/students/${student.id}`">{{student.name}}</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    students: null
  }
};
</script>

<style lang="postcss" scoped>
</style>