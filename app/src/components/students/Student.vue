<template>
    <li>
      <RouterLink :to="`/students/${student.id}`">
        {{student.name}}
      </RouterLink>

    </li>
</template>

<script>
export default {
  props: {
    student: null
  }
};
</script>

<style>

</style>