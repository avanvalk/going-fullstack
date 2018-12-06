export default {
  
    getStudents() {
      return fetch('/api/students')
        .then(response => response.json());      
    },
  
    getStudent(id) {
      return fetch(`/api/students/${id}`)
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
    },

  getTracks() {
    return {
      js: 'JavaScript',
      python: 'Python',
      go: 'Go',
      rust: 'Rust'
    };
  }
};
