import React from 'react'
import  "./aboutpage.css"
export default function About() {
  return (
    <>
    <div className="aboutdiv">
      <div className="main-defination">
        <h3>About Text Utils</h3>
        <p>Welcome to Text Utils, your one-stop solution for various text manipulation needs. Our platform offers a range of features designed to enhance your productivity and streamline your workflow. Below is a brief description of each feature:</p>
      </div>
      <div className="features">
      <h3>Features</h3>
      <div className="boxes-container">
        <div className="box">
            <h4>Case Converter</h4>
            <p>Effortlessly switch between different text cases with our Case Converter. Whether you need to convert text to uppercase, lowercase, title case, or sentence case, our tool can handle it all with just a click.</p>
        </div>
        <div className="box">
        <h4>Remove Extra Spaces</h4>
        <p>Eliminate unnecessary spaces from your text with our Remove Extra Spaces tool. This feature ensures your text is clean and properly formatted by removing extra spaces between words and lines.</p>
        </div>
        <div className="box">
        <h4>Language Conversion</h4>
        <p>Translate text between different languages with our Language Conversion tool. This feature is powered by advanced translation technology to ensure accuracy and fluency.</p>
        </div>
        <div className="box">
        <h4>Word Counting</h4>
        <p>Keep track of the number of words and characters in your text with our Word Counting tool. It's ideal for writers, students, and professionals who need to meet specific word count requirements.
        </p>
        </div>
        <div className="box">
        <h4>Copy Text</h4>
        <p>Easily copy your formatted text to the clipboard using our Copy Text feature. This saves time and ensures accuracy when transferring text between different applications.</p>
        </div>
        <div className="box">
        <h4>Text To Speech</h4>
        <p>Convert written text into spoken words with our Text to Speech feature. This tool is perfect for creating audio versions of written content, making it accessible to a wider audience.</p>
        </div>
        </div>
      </div>

      <div className="compatibility">
        <h3>Browser Compatibility: </h3>
        <ul>
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Microsoft Edge </li>
        <li>Safari</li>
        <li>Opera</li>
        </ul>
      </div>
    <div className="end-note">
    <p>Thank you for choosing Text Utils. We are committed to providing you with the best text manipulation tools to enhance your productivity. If you have any questions or feedback, please feel free to contact us.</p>
    </div>
    </div>
    <div className="footer-About">
    <p>All right reserved | copyright 2024</p>
  </div>
  </>
  
  )
}
