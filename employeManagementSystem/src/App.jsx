import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
function App() {
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // })
  
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  const handleUser = (email,password)=>{
    if (email == "admin@mail.com" && password == 123){
      setUser("admin")
    }else if(authData && authData.employee.find((e)=>{
      
    })){
      setUser("employee")
    }
    else{
      alert("invalid credentials ")
    }
  }
  // handleLogin("user@mail.com",123)
  
  return (
    <>
   {!user ? <Login handleUser={handleUser} />:""}  
   {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}    
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
