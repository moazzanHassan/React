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

  // useEffect(() => {
  //  if(authData){
  //   const loggedInUser = localStorage.getItem("loggedInUser")
  //   if(loggedInUser){
  //     setUser(loggedInUser.role)
  //   }
  //  }
  // }, [authData])
  

  const handleUser = (email,password)=>{
    if (authData && authData.admin.find((e)=>email == e.email && e.password == password)){
      setUser({role:"admin"})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && e.password == password)
      if (employee){

        setUser({role:employee})
      }
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))

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
