
import './App.css';
import Home from "./components/Home"
import MyRoute from "./Router"
import Practice from "./components/Practice"
import ReactProject1 from './components/ReactProject1';

function App() {
  // const [firstName, SetFirstName] = useState("");
  // const [LastName, SetLastName] = useState("");
  // console.log(firstName)
  // console.log(LastName)
  // function clickFirstHandler(event) {
  //   // console.log("firstname printing")
  //   // console.log(event.target.value)
  //   SetFirstName(event.target.value)
  // }
  // function clickLastHandler(event) {
  //   // console.log("last name rinting")
  //   // console.log(event.target.value)
  //   SetLastName(event.target.value)
  // }

  return (
    <>
      {/* <Home />
      <MyRoute/> */}
      {/* <ReactProject1 /> */}
      {/* <Form /> */}
<Practice/>
<ReactProject1/>

    </>
  )

}

export default App