import React, {useState} from "react"
import "./Footer.scss";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FaFacebook, FaTwitter } from "react-icons/fa";




const Footer = () => {

 

    return (
        <div className="footer">
        <div className="copyright"><p>copyright by Przemysław Hechłacz</p></div>
        <div className="icons-footer">
        <FacebookShareButton url="https://example.com" quote="Example Title">
         <FaFacebook size={32} round />
       </FacebookShareButton>
 
       <TwitterShareButton url="https://example.com" title="Example Title">
         <FaTwitter size={32} round />
       </TwitterShareButton>
       </div> 
         </div>
    )
}

export default Footer