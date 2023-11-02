
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

const Profile = () => {
  return <h1>Это страница профиля</h1>
}
const Messages = () => {
  return <h1>Это страница с сообщениями</h1>
}
const Friends = () => {
  return <h1>Это страница с друзьями</h1>
}
function App() {
  return (
    <div className="row">
      <div className="col-3">
        <div className="nav flex-column nav-pills">
          <NavLink className="nav-link" to="profile">Профиль</NavLink>
          <NavLink className="nav-link" to="messages">Сообщения</NavLink>
          <NavLink className="nav-link" to="friends">Друзья</NavLink>
        </div>
      </div>
      <div className="col-9">
        <Routes>
          <Route path="/." element={<h1>Личный кабинет выбирайте из пунктов меню слева</h1>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/friends' element={<Friends/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
