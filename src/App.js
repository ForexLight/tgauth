import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import SecuredData from "./components/SecuredData/SecuredData";


function App() {
    const [userData, setUserData] = useState(false)

  return (
    <Routes>
        <Route index element={userData ?  <SecuredData userData={userData} /> : <Login setUserData={setUserData}/> }/>
    </Routes>
  );
}

export default App;
