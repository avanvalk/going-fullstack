<template>
  <section class="students">
    <h2>Students</h2>
    <StudentList :students="students"/>
  </section>
</template>

<script>
import api from '../../services/api';
import StudentList from './StudentList';

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

<style>
</style>