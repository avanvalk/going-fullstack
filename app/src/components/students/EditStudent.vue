<template>
  <span>
    <button @click="show = true">✎ Edit</button>
    <Modal v-if="show" :onClose="() => show = false">
      <StudentForm 
        :onSubmit="handleEdit"
        :studentToEdit="student"
        label="Update"
      />
    </Modal>
  </span>
</template>

<script>
import StudentForm from './StudentForm';
import Modal from '../shared/Modal';
export default {
  props: {
    onEdit: Function,
    student: Object
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    StudentForm,
    Modal
  },
  methods: {
    handleEdit(student) {
      return this.onEdit(student)
        .then(() => this.show = false);
    }
  }
};
</script>