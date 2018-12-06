<template>
    <section v-if="student">
        <h2>Student Name: {{student.name}}</h2>
        <p>
            Birth Year: {{student.yob}}
        </p>
        <p>
            Male in gender: {{student.male}}
        </p>

</template>

<script>
import api from '../../services/api';

export default {
    data() {
        return {
            student: null
        };
    },
    created() {
        api.getStudent(this.$route.params.id)
        .then(student => {
            this.student = student;
        });
    }
};
</script>

<style>

</style>
