import LoginForm from './Components/LoginForm'
import { BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom"
import './App.css'
import CreateForm from './Components/CreateForm'
import ForgetPassword from './Components/ForgetPassword'


function App() {


  return (
    <Router>



<Routes>
  <Route path='/' element={<Navigate to="/login" replace />}/>
  <Route path='/login' element={<LoginForm/>}/>
  <Route path='/createForm' element={<CreateForm/>}/>
  <Route path='/reset' element={<ForgetPassword/>}/>
</Routes>
</Router>
  )
}

export default App
