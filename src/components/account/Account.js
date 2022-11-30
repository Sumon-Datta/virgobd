import { faFacebookF, faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard, faGift, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import  "./Account.css"





const Account = () => {

  const [register, setRegister] = useState(true)

  return (
    <div>
      <div className="containerr">
        <div className="row">
          <div className="signlog  col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="button-one">
            <button className="button " onClick={()=>setRegister(true)}>Login</button>
            </div>

            <div className="button-two">
            <button className="button" onClick={()=>setRegister(false)} >Register</button>
            </div>

           

          </div>
          




          <div className="form-section col-xs-12 col-sm-12 col-md-12 col-lg-12">

            {
              register?

              // login

              <div className="logIn">
                <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-check check">
                <input type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1" 
                />
                <label className="form-check-label" for="exampleCheck1">
                  Keep me logged in
                </label>
              </div>


              <div className="col-md-12 text-center login-btn">
            <a href="#" className="btn btn-primary">
              Login Now
            </a>
          </div>

          <div className="forget-pass w-100 text-center">
            <a href="#">Forget Your Password</a>
          </div>


          <div className="googleFacebook row text-center ">
            <div className="google col-md-6 col-sm-12">

              <a href=""><img src="https://dg19fhsjeexqh.cloudfront.net/web/images/miscellaneous/sign-in-with-google.jpeg" alt="" /></a>
          
            </div>
            
            <div className="facebook col-md-6 col-sm-12">
              <a href=""><img src="https://dg19fhsjeexqh.cloudfront.net/web/images/miscellaneous/sign-in-with-facebook.png" alt="" /></a>
            
            </div>
            
          </div>

            </form>
              </div>

            :

            <form>

        <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email address"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              


              <div className="col-md-12 text-center login-btn">
            <a href="#" className="btn btn-primary">
              Create Account
            </a>
          </div>

          <div className="term w-100 text-left">
            <p >By continuing we will process your data, obtained through your browsing on the website, to offer you content related to your tastes, based on your interactions with the brand. Bear in mind that you can oppose this treatment. You should accept <a className="text-decoration-none" href="https://www.virgobd.com/">terms and policy</a> of https://www.virgobd.com</p>
          </div>


          <div className="googleFacebook row text-center ">
            <div className="google col-md-6 col-sm-12">

              <a href=""><img src="https://dg19fhsjeexqh.cloudfront.net/web/images/miscellaneous/sign-in-with-google.jpeg" alt="" /></a>
          
            </div>
            
            <div className="facebook col-md-6 col-sm-12">
              <a href=""><img src="https://dg19fhsjeexqh.cloudfront.net/web/images/miscellaneous/sign-in-with-facebook.png" alt="" /></a>
            
            </div>
            
          </div>

            </form>


            }
       
          </div> 

          
          
        </div>
      </div>

      
      {/* Newsletter Start */}

<div className="newsletter">
  
  <div className="row">
 
  <div className="col-md-8">
 
     <div className="contents">
       <h2>KEEP <span>in</span>  TOUCH</h2>
     </div>
 
     <div className="row">
 
       <div className="col-md-6">
         <div className="form-group">
         <input className="form" type="text" placeholder="Enter Your Email Address" />
         <br />
         <button className="btn btn-primary" >SIGN UP FOR EMAILS</button>
         </div>
       </div>
 
       <div className="col-md-6">
       <div className="form-group">
         <input className="form" type="text" placeholder="Enter Your Email Address" />
         <br />
         <button className="btn btn-primary" >SIGN UP FOR TEXT</button>
         </div>
       </div>
 
       </div>
 
       <div className="row">
         <div className="col-md-12">
           <p className="keepintouch" >*Msg & Data Rates May Apply. By entering your phone number, clicking submit, and completing the sign-up instructions, you consent to receive one or more recurring marketing text messages each week at the mobile number provided that may be sent via an automated system, and you also consent to the text terms & privacy policy. Consent is not a condition of purchasing goods or services. You can opt-out at any time by responding STOP. You can also respond HELP for help.</p>
         </div>
       </div>
 
   </div>
 
   <div className="col-md-4">
 
   <div className="newsletter-icon">
     <div className="map fonticon">
     <FontAwesomeIcon icon={faMapLocationDot} size="xs" />
     <span>Find a Store</span>
     
     </div>
   
   <div className="creditcard fonticon">
   <FontAwesomeIcon icon={faCreditCard} size="xs" />
   <span>Credit Card</span>
   
   </div>
   
   <div className="gift fonticon">
   <FontAwesomeIcon icon={faGift} size="xs" />
   <span>Gift Card</span>
   
   </div>
   
   
   
   </div>
   </div>
  </div>
 
 </div>
 
 
 
 
 
 
 
 <div className="support-section">
   <div className="support-area">
 
     <div className="row">
       
       <div className="col-md-3">
        <div className="support-content ">
        <h5>SERVICE & SHOPPING</h5>
         <li>Help & FAQs</li>
         <li>Privacy Policy</li>
         <li>Refund Policy</li>
         <li>Terms & Condition</li>
         <li>Order History</li>
       </div>
        </div>
 
       <div className="col-md-3">
       <div className="support-content ">
       <h5>NEED HELP ?</h5>
         <li > <b>email:</b>  contact@virgobd.com</li>
         <li > <b>Phone:</b>  01960888999</li>
         <li >( 10 AM – 6 PM )</li>
         </div>
       </div>
 
       <div className="col-md-3">
       <div className="support-content ">
       <h5>INFORMATION</h5>
         <li >About Us</li>
         <li >Contact Us</li>
         <li >Store Locator</li>
         <li >Career</li>
         </div>
       </div>
 
       <div className="col-md-3">
       <div className="support-content ">
       <h5>CONNECT WITH US</h5>
       <FontAwesomeIcon icon={faFacebookF} size="xs" />
       <FontAwesomeIcon icon={faInstagram} size="xs" />
       <FontAwesomeIcon icon={faYoutube} size="xs" />
       <FontAwesomeIcon icon={faTwitter} size="xs" />
       <FontAwesomeIcon icon={faPinterest} size="xs" />
         </div>
       </div>
 
       
 
     </div>
 
     <div className="row">
       <div className="col-md-12 col-lg-12 col-sm-12">
         <div className="ssl-img">
           <img src="./assets/images/footer/ssl.png" className="img-fluid" alt="" />
         </div>
       </div>
     </div>
     
   </div>
 </div>
 
 
 <div className="copyright-section">
   <div className="row">
   <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
     <p> <span className="copyright">&#169;</span> copyright 
     <span className="year" >2022 </span>all right reserved</p>
   </div>
 
   <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 float-end">
     <p className="right" >Developed By :
     <a href="https://mediasoftbd.com/"> mediasoft data systems Limited.</a></p>
   </div>
   </div>
 </div>
 





    </div>
  );
};

export default Account;
