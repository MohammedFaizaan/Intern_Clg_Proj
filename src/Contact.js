import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contacts-links">
          <h1>Contacts:</h1>
          <img src="/web-pikachu.png" className="con-img1" alt="pikachu"></img>
          <div>
            <h3>
              Facing Tech issues, login problems, Bug reports, etc...Email Us
              at:{" "}
              <span>
                <Link>Support@Rodeck.com</Link>
              </span>
            </h3>
            <h3>
              For Sponserships, Parnterships or Advertisement:{" "}
              <span>
                <Link>biz@Rodeck.com</Link>
              </span>
            </h3>
            <h3>
              Reviews and Media Kit:
              <span>
                <Link>Review@Rodeck.com</Link>
              </span>
            </h3>
          </div>
        </div>
        <div className="social-media">
          <h1>Social Media & Community Links:</h1>
          <img src="/web-chibi.png" className="con-img2" alt="chibi polar bear doll"></img>
          <div>
            <a href="https://Discord.com/Channels/20398427" className="discord">
              Discord
              <span>
                <FaDiscord color="#5865F2" fontSize="20px" />
              </span>
            </a>
            <br />
            <a href="https://x.com/R0deck" className="twitter">
              Twitter
              <span>
                <BsTwitterX color="black" fontSize="20px" />
              </span>
            </a>
            <br />
            <a href="https://instagram.com/R0deck" className="instagram">
              Instagram
              <span>
                <FaInstagram color="#E1306C" fontSize="20px" />
              </span>
            </a>
            <br />
            <a href="https://Facebook.com/R0deck" className="facebook">
              Facebook
              <span>
                <FaFacebookSquare color="#1877F2" fontSize="20px" />
              </span>
            </a>
            <br />
            <a
              href="https://www.youtube.com/channel/UChmZ6QbxgHlmX3ISIHxIpQQ"
              className="youtube"
            >
              Youtube
              <span>
                <FaYoutube color="#FF0000" fontSize="20px" />
              </span>
            </a>
            <br />
            <a href="https://www.twitch.com/R0deck" className="twitch">
              Twitch
              <span>
                <FaTwitch color="#6441A4" fontSize="20px" />
              </span>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <h1>Contact Form:</h1>
          <img src="/web-chibiglasses.png" className="con-img3" alt="chibi doll with glasses"></img>
          <input type="text" placeholder="Name"></input>
          <br />
          <input type="email" placeholder="Email"></input>
          <br />
          <select>
            <option value="valorant">--Select Here--</option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Business">Business</option>
            <option value="Others">Others</option>
          </select><br/>
          <textarea placeholder="Write Down Your Issues Here!" /><br/>
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
