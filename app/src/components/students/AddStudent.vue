<template>
  <section>
    <button @click="show = true">Add a New Student</button>
    <Modal v-if="show" :onClose="() => show = false">
      <StudentForm :onSubmit="handleAdd"/>
    </Modal>
  </section>
</template>

<script>
import StudentForm from './StudentForm';
import Modal from '../shared/Modal';

export default {
  props: {
    onAdd: Function
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
    handleAdd(student) {
      return this.onAdd(student)
        .then(() => this.show = false);
    }
  }
};
</script>