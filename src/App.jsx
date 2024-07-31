import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact'; 


function App() {
  return (
    <div> {/* Wrap the JSX expressions inside a parent element */}
        <Header></Header>
        <About></About>
        <Contact></Contact>
    </div>
  );
} // Add a closing brace '}' at the end of the function

export default App;
