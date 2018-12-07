<template>
  <section class="students">
    <h2>Students</h2>

    <ul v-if="students">
      <li v-for="student in students" :key="student.id">
        {{student.name}}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      students: null,
      error: null
    };
  },
  created() {
    api.getStudents()
    .then(students => {
      this.students = students;
    })
    .catch(err => {
    this.error = err;
  });
}
};
</script>