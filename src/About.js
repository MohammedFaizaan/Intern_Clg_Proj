import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-vid">
        <video width="1000px" autoPlay loop>
          <source
            src="/vecteezy_a-glowing-pink-digital-grid-leading-to-a-distant-futuristic_56338698.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="about-container">
        <div className="welcome-container">
          <h1>
            Welcome to <span>Ro-deck</span> — your gateway to gaming without
            limits.
          </h1>
          <p>
            We’re more than just a digital storefront. We’re a platform built by
            gamers, for gamers, with a mission to make discovering, playing, and
            sharing games as seamless and exciting as possible. Whether you're
            into indie gems, AAA blockbusters, or experimental new releases,
            we’re here to make sure you never miss out.<br></br>
            At Ro-deck, we believe in:<br></br>
            <ul>
              <li>
                <span>Empowering developers</span> by offering fair revenue
                shares and better discoverability
              </li>
              <li>
                <span>Supporting players</span> with a clean, intuitive
                experience
              </li>
              <li>
                <span>Building community</span>, where both gamers and creators
                can thrive
              </li>
            </ul>
            This is just the <span>Beginning</span>. <span>Jump in</span> and{" "}
            <span>Level up</span> your game.
          </p>
        </div>
        <div className="store-container">
          <h1>Browse Store</h1>
          <p>
            <span>Explore</span> a <span>Massive</span> collection of games
            across every genre imaginable. Use powerful filters to{" "}
            <span>Discover</span> new titles, <span>hidden gems</span>, and your
            next favorite <span>Obsession</span>.
          </p>
          <h1>Top sellers</h1>
          <p>
            Check out what’s <span>Trending</span> and what everyone’s{" "}
            <span>Playing</span> right now. Our top sellers list is constantly
            updated so you can stay on top of the
            <span>Hype</span>.
          </p>
          <h1>New Releases</h1>
          <p>
            <span>Fresh</span> from the devs — browse the newest games added to
            our <span>Library</span>. Whether it’s a much-anticipated{" "}
            <span>Launch</span> or a breakout <span>indie hit</span>, find it
            here first.
          </p>
        </div>
        <div className="support-container">
          <h1>FAQ's?</h1>
          <p>
            <h2>
              Got <span>Questions?</span> We've got <span>Answers</span>.
            </h2>
            Q: How do I install games?<br/>
            <span>A</span>: After <span>purchasing</span> a game, just click “<span>Install</span>” from your Library. The <span>Client</span> will handle the rest. <br/><br/>
            Q: Can I get a <span>Refund?</span><br/>
            <span>A</span>: Yes — our refund policy allows you to <span>request</span> a refund within <span>14 days</span> of purchase, provided the game has been <span>played</span> for less than 2 hours. <br/><br/>
            Q: Do you support cloud saves? <br/>
            <span>A</span>: Yes, most games support <span>cloud saving</span>. You can enable it in <span>Settings</span>. <br/><br/>
            Q: I forgot my password — what now? <br/>
            <span>A</span>: Click “<span>Forgot Password</span>” on the login screen and follow the <span>instructions</span> to <span>reset</span> it securely.<br/><br/>
          </p>
        </div>
        <div className="customer-container">
          <h1>Customer Support</h1>
          <p>If you need <span>personal assistance</span>, our <span>support team</span> is here to help.</p>
          <ul>
            <li>Email: <Link>Support@Rodeck.com</Link></li>
            <li>Live Chat: Available Mon–Fri, 9 AM – 6 PM (UTC)</li>
            <li>Submit a Ticket with Discord: <a href="https://Discord.com/Channels/20398427">Ticket</a></li>
          </ul>
        </div>
        <div className="TOS">
          <h1>Terms Of Services</h1>
          <p>
          By using <span>Ro-deck</span>, you agree to follow our <span>community guidelines</span>, respect <span>intellectual property</span>, and <span>play fair</span>. The full TOS outlines your <span>rights</span> and <span>responsibilities</span> when using our platform, including <span>account rules</span>, <span>payment terms</span>, and <span>refund eligibility</span>.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
