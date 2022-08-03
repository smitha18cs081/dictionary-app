import React from 'react';
import './pages/Admin.css';
interface dictionary {
    Username :string;
    word:string;
    meaning:string;
}

const Admin = () => {
  return (
    <div>
      <p>Hello Everyone. This is the Admin page. Here the admin can add the word, meaning to the dictionary.</p> 
      <input type={"text"} value={"Enter a username"}/>;
      input type={"text"} value={"Enter the word, meaning"}
      <button type="submit">Add</button>
      
    </div>
    
  );
};

export default Admin
