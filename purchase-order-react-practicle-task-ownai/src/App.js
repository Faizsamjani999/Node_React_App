import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './App.css'; // Custom CSS
import FormComponent from './components/Form'; // Import Form Component

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Purchase Order Form</h1>
      <FormComponent />
    </div>
  );
}

export default App;
