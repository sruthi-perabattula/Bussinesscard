
import './App.css';
import sruthi from './sruthi.jpg';
import { BsLinkedin, BsFacebook,  BsInstagram, BsWhatsapp} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className="App">
       <div className="container">
          
          <img src={sruthi} alt="text" className="picture"></img>
          <p>
          <h1>Sruthi Perabattula</h1>
          <h4 id="a">Frontend Developer</h4></p>
          <button id="btn"><MdEmail/><a href="o180314@rguktong.ac.in">Email</a></button>
          <div class="details">
            <h3>About</h3>
            <p>I am persuing B.Tech 3rd year in Computer Science branch at IIIT-Ongole.I have some skills like
              Html,CSS,Javascript,Reactjs,Bootstrap,Python,Java,C and Data Structures.I am 
              fast learner and explore myself to grab all available oppurtunities.
            </p>
            <h3>Interests</h3>
            <ul class="list">
                <li>FullStack WebDevelopment</li>   
                <li>Devops</li>
                <li>Cloud Computing</li>   
                <li>Cyber Security</li>
            </ul>
          </div>
        
          <div class="icons"><a href="https:||www.linkedin.com/in/sruthi-perabattula-1b88a9234"><BsLinkedin/></a>
            <a href="#"><BsFacebook/></a>
            <a href="https://www.instagram.com/sruthi_srinivaas/?hl=en"><BsInstagram/></a>
            <a href="#"><BsWhatsapp/></a>
            
          </div>
        </div>
    </div>
  );
}

export default App;
