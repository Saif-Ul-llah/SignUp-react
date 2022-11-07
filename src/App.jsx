import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="first">
    {/* <img id="logo" src="images/logo.png"/> */}
    {/* <button id='SignUp'  onClick="signUp()">SignUp</button> */}
    {/* <input type="button" value="Login" id='Login'/><br /> */}
    <input type="button" value="SignUp" id='SignUp'onClick={signUp} />
    <input type="button" value="Login" id='Login'onClick={login} />
   <div id='sign'>
    <h2>SignUp :</h2>
   <label>Full Name :</label>
    <input id="fname" placeholder="Full Name" type="text"/>
    <label>Email :</label>
    <input id="email" placeholder="Email" type="text"/>
    <label>Password :</label>
    <input id="contact" placeholder="Password" type="password"/>
    <label>Confirm Password:</label>
    <input id="address" placeholder="Confirm Password" type="password"/>
    <input id="submit" type="submit" value="Submit"/>
   </div>
   <div id="login">
    <h2>Login</h2>
   <label>Email :</label>
    <input id="email" placeholder="Email" type="text"/>
    <label>Password :</label>
    <input id="contact" placeholder="Password" type="password"/>
    <input id="submit" type="submit" value="Submit"/>
   </div>
    </div>

    );
}

export default App;
const signUp=()=>{
 
  document.getElementById("login").style.display="none"
  document.getElementById("sign").style.display="block"
  document.getElementById("SignUp").style.display="none"
  document.getElementById("Login").style.display="block"

}

const login=()=>{
  document.getElementById("login").style.display="block"
  document.getElementById("sign").style.display="none"
  document.getElementById("SignUp").style.display="block"
  document.getElementById("Login").style.display="none"


  //   return(
// console.log("hogaya")
//   )
 }