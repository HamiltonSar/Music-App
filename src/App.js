import React from "react";
import { Routes , Route} from "react-router-dom";
import styles from "./App.module.css";
import AppWindow from "./components/indexproject/components/indexcompontent";
import Login from "./components/forms/login/components/login";
import CreateAccount from "./components/forms/createaccount/components/createaccount";

function App() {

  return(
    <div className= {styles.appwindow}> 
      <Routes>
        <Route path="/" element = { <AppWindow /> } />
        <Route path="/login" element = { <Login/> } />
        <Route path="/createaccount" element = { <CreateAccount /> } />
      </Routes>       
    </div>
   );
  
 
}

export default App;
