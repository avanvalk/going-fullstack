<template>
  <section v-if="student">
    <div class="name-header">
      <h2>
        {{student.name}}
      </h2>
      <EditStudent 
        :student="student"
        :onEdit="handleEdit"/>
      <button @click="handleRemove">🗑 Remove</button>
    </div>
  </section>
</template>

<script>
import api from '../../services/api';
import EditStudent from './EditStudent';
export default {
  data() {
    return {
      student: null
    };
  },
  components: {
    EditStudent
  },
  created() {
    api.getStudent(this.$route.params.id)
      .then(student => {
        this.student = student;
      });
  },
  methods: {
    handleEdit(student) {
      return api.updateStudent(student)
        .then(updated => {
          this.student = updated;
        });
    },
    handleRemove() {
      if(!confirm(`Remove ${this.student.name}?`)) {
        return;
      }
      // return api.removeStudent(student)
    }
  }
};
</script>