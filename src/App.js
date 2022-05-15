import {useState} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Login from "./components/Login/Login";
import SecuredData from "./components/SecuredData/SecuredData";


function App() {
    const [userData, setUserData] = useState(false)
    console.log(userData)
  return (
    <Routes>
        <Route index element={<Navigate to={userData ? '/secured' : '/login'}/>} />
        <Route path={userData ? '/secured' : '/login'} element={userData ?  <SecuredData userData={userData} setUserData={setUserData} /> : <Login setUserData={setUserData}/> }/>
    </Routes>
  );
}

export default App;
