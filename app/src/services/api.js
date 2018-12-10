
const getOptions = (method, data) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
};

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
    return fetch('/api/students', getOptions('POST', student))
      .then(response => response.json());
  },

  updateStudent(student) {
    return fetch(
      `/api/students/${student.id}`, 
      getOptions('PUT', student)
    )
      .then(response => response.json());
  },
};
