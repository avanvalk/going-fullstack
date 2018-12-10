<template>
  <form @submit.prevent="onSubmit(student)">
    <p>
      <label>Name:</label>
      <input type="name" v-model="student.name" require>
    </p>
    <p>
      <label>Year of Birth:</label>
      <input type="yob" 
        v-model="student.yob" 
        required>
    </p>
    <p>
      <label>School:</label>
      <input type="school" 
        v-model="student.school" 
        required>
    </p>

    <button>{{label || 'Add'}}</button>
  </form>
</template>

<script>

function initStudent() {
  return {
    name: '',
    yob: '',
    school: '',
    trackId: 1
  };
}
function copyStudent(student) {
  return {
    id: student.id,
    name: student.name,
    yob: student.yob,
    school: student.school,
    trackId: student.trackId
  };
}
export default {
  props: {
    onSubmit: Function,
    label: String,
    studentToEdit: Object
  },
  data() {
    return {
      student: this.studentToEdit 
        ? copyStudent(this.studentToEdit) 
        : initStudent(),
      tracks: null
    };
  }
};
</script>

<style>

</style>