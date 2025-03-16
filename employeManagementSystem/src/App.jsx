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
  const [loggedInUserData, setloggedInUserData] = useState(null);
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
    if (email == "admin@example.com"&& password == "123"){
      setUser("admin")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && e.password == password)
      if (employee){

        setUser(employee)
        setLogggedInUserData(employee)

      }
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))

    }
    else{
      alert("invalid credentials ")
    }
  }
  // handleLogin("user@mail.com",123)
  
  return (
    <>
   {!user ? <Login handleUser={handleUser} />:""}  
   {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard data= {loggedInUserData} />}    
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
