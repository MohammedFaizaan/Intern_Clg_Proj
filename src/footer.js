import React from "react";
import "./footer.css";

function footer(){
    return (
        <>
        <ul class="footer_list">
          <div>
          <li>About Us</li><br></br>
          <p>Learn more about our Platform, Mission, and Vision</p>
          <a href="#">About Us</a>|<a href="#">Career</a>|<a href="#">Press</a><br></br><br></br>
          </div>

          <div>
          <li>Support</li><br></br>
          <p>Need help? Find answers to your questions.</p>
          <a href="#">Customer Support</a>|<a href="#">FAQs</a>|<a href="#">Community Forums</a>|<a href="">System Requirements</a><br></br><br></br>
          </div>

          <div>
          <li>Discover</li><br></br>
          <p>Explore new games, updates, and more.</p>
          <a href="#">Browse store</a>|<a href="#">Top Sellers</a>|<a href="#">New Releases</a>|<a href="#">Discounts & Offers</a><br></br><br></br>
          </div>

          <div>
          <li>Policies</li><br></br>
          <p>Review our terms, privacy policies, and user agreements.</p>
          <a href="#">Privacy Policies</a>|<a href="#">Terms of Services</a>|<a href="#">Refund Policies</a><br></br><br></br>
          </div>

          <div>
          <li>Copyright & legal</li><br></br>
          <p>© 2025 Ro-Deck. All rights reserved</p>
          <a href="#">Legal Notices</a>|<a href="#">Cookie Preferences</a>
          </div>
        </ul>
        </>
      )
      
    }

    export default footer;
