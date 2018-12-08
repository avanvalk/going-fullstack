export default {
  getStudents() {
    return fetch('/api/students')
      .then(response => response.json());
  },

  addStudent(student) {
    return fetch('/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    })
      .then(response => response.json());
  }
};