<template>
  <ul v-if="students">
    <Student v-for="student in sortedStudents" 
      :key="student.id"
      :student="student"/>
  </ul>
</template>

<script>
import Student from './Student';

export default {
  props: {
    students: null
  },
  components: {
    Student
  },
  computed: {
    sortedStudents() {
      return this.students.slice().sort((a, b) => {
        if(a.yob === b.yob) {
          if(a.name > b.name) return 1;
          if(a.name < b.name) return -1;
          return 0;
        }
        if(a.yob > b.yob) return -1;
        return 0;
      });
    }
  }
};
</script>

<style>

</style>