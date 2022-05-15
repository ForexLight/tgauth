import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import SecuredData from "./components/SecuredData/SecuredData";


function App() {
    const [userData, setUserData] = useState(true)
    
  return (
    <Routes>
        <Route index element={userData ? <Login setUserData={setUserData}/> : <SecuredData userData={userData} setUserData={setUserData} />  }/>
    </Routes>
  );
}

export default App;
