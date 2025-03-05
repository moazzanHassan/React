import { useEffect } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { setLocalStorage } from './utils/localStorage'
function App() {
  useEffect(() => {
    setLocalStorage()
  
  })
  
  return (
    <>
    <Login />      
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
