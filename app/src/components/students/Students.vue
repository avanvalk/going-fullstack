<template>
  <section class="students">
    <h2>Students</h2>
    <AddStudent :onAdd="handleAdd"/>
    <StudentList :students="students"/>
  </section>
</template>

<script>
import api from '../../services/api';
import AddStudent from './AddStudent';
import StudentList from './StudentList';
export default {
  data() {
    return {
      students: null,
      error: null
    };
  },
  components: {
    AddStudent,
    StudentList
  },
  created() {
    api.getStudents()
      .then(students => {
        this.students = students;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(student) {
      return api.addStudent(student)
        .then(saved => {
          this.students.push(saved);
        });
    }
  }
  
};
</script>

<style>
</style>