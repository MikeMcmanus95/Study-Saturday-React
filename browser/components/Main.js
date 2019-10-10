import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor() {
    super();
    this.state = { students: [] };
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    try {
      const response = await axios.get('/student');
      this.setState({ students: response.data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const studentsArr = this.state.students;
    return (
      <ul>
        {studentsArr.map(student => (
          <li key={student}>{student.fullName}</li>
        ))}
      </ul>
    );
  }
}

export default Main;
