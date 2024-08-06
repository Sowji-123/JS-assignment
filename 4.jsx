import React from 'react';
import ReactDOM from 'react-dom';
import SimpleForm from './SimpleForm'; // Adjust the import path as needed

const App = () => {
  return (
    <div>
      <h1>Form Submission and Validation Example</h1>
      <SimpleForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
