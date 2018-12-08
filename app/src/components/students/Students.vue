<template>
  <section class="students">
    <h2>Students</h2>
    <li>
      {{ students }},
      {{  }}
    </li>
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