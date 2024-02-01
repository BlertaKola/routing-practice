import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import Routing from "./components/Routing";
import Number from "./components/Number";
import Word
 from "./components/Word";
const Home = (props) => {
  const [nameState, setNameState] = useState("")
  const [surnameState, setSurnameState] = useState("")
  const { user, setUser } = props

  const navigate = useNavigate()


  const sendData = (e) => {
    e.preventDefault()
    setUser({ name: nameState, surname: surnameState })
    navigate("/about")
  }
  return (
    <>

      <h1 style={{ color: "red" }}>Home Component</h1>
      <form onSubmit={sendData}>
        <div>
          <input type="text" placeholder="Input your name" value={nameState} onChange={(e) => setNameState(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Input your surname" value={surnameState} onChange={(e) => setSurnameState(e.target.value)} />
        </div>
        <input type="submit" value="Send data" />
      </form>
      <Link to={"/about"}>Go to About </Link>
    </>
  );
}

const About = (props) => {
  const { user } = props;
  return (
    <>

      <h1 style={{ color: "blue" }}>About Component</h1>
      {user.name && user.surname ? <h1>User data: {user.name} {user.surname}</h1> : ""}
      <Link to={"/"}>Go Home</Link>
    </>

  );
}

function App() {

  const [User, SetUser] = useState({})

  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About user={User} />} />
        <Route path="/home" element={<Routing />} />
        <Route exact path="/:nr" element={<Number />} />
        <Route path="/:word/:color1/:color2" element={<Word/>}/>
        <Route exact path="/" element={<Home user={User} setUser={SetUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
