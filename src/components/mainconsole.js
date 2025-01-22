import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfo } from '@fortawesome/free-solid-svg-icons';
import "./mainconsole.css";

export default function MainConsole() {
  
  const [text, setText] = useState("");
  const [popupMessage, setPopupMessage] = React.useState('');
  const [popupIcon, setPopupIcon] = useState(null);

  const wordCounter = (value) => {
    const trimmedText = value.trim();
    const words = trimmedText.split(/\s+/).filter((word) => word.length > 0);
    return words.length;
  };

  const characterCounter = (value) => {
    const noWhitespacesText = value.trim().replace(/\s+/g, "");
    const characters = noWhitespacesText.length;
    return characters;
  };

  const handleOnChange = (event) => {
    let value = event.target.value;
    setText(value);
    document.querySelector(
      "#wordCount"
    ).textContent = `No. of words: ${wordCounter(value)}`;
    document.querySelector(
      "#characterCount"
    ).textContent = `No. of characters: ${characterCounter(value)}`;
  };
  
  const handlePopUpMessages =(popupMessage) => {
    let popupAlertMessage = document.querySelector(".popupAlertMessage");
    const popupIcon = text.trimStart().length > 0 ? faCheck : faInfo;
    popupAlertMessage.style.display = "block";
    
    setTimeout(function () {
      popupAlertMessage.style.display = "none";
    }, 2000);

    setPopupIcon(popupIcon);
    setPopupMessage(popupMessage);
  };
// ------------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className="popupAlertMessage">
      <FontAwesomeIcon icon={popupIcon} className="iconStyle"/> {popupMessage}
      </div>

      <div className="console-container">

        <div className="text-box-div">
          <label id="heading" for="name">Try Textutils and is amazing features for free</label>
          <textarea className="textbox" id="textBox" name="" value={text} placeholder="Type text here..." onChange={handleOnChange}></textarea>
        </div>

        <div className="funcs-btns-div">
          
          <div className="buttons-container">
            <button className="button">
              <p>Case converter</p>
              <i class="fa-solid fa-chevron-down"></i>
              <div className="dropdownmenu">
                <button onClick={() => {
                    setText(text.toUpperCase());
                    let popupText = text.trimStart().length > 0 ? "Text converted to UPPERCASE!" : "Please write something first!";
                    handlePopUpMessages(popupText);
                  }}>UPPERCASE
                </button>

                <button onClick={() => {
                    setText(text.toLowerCase());
                    let popupText = text.trimStart().length > 0 ? "Text converted to lowercase!" : "Please write something first!!";
                    handlePopUpMessages(popupText);
                  }}>lowercase
                </button>

                <button onClick={() => {
                    let result='';
                    let capitalizeNext=true;
                    let char;
                    for ( let i=0; i<text.length; i++){
                      char = text[i];
                      if( capitalizeNext && /[a-zA-Z]/.test(char)){
                         result+=char.toUpperCase();
                         capitalizeNext=false;

                      }
                      else {
                        result += char.toLowerCase();
                      }
                      if(/[.!?]/.test(text[i])){
                        capitalizeNext=true;
                      }  
                    }
                    setText(result);
                    // setText(
                    //   // text.split(/\.\s+/)
                    //   //   .map(
                    //   //     (sentence) =>
                    //   //       sentence.charAt(0).toUpperCase() + sentence.slice(1)
                    //   //   )
                    //   //   .join(". ")
                    // );
                    let popupText = text.trimStart().length > 0 ? "Text converted to Sentence case!" : "Please write something first!!";
                    handlePopUpMessages(popupText);
                  }}>Capitalize text
                </button>
              </div>
            </button>
          {/* </div>

          <div className="buttons-container"> */}
            <button
              className="button"
              onClick={() => {
                setText("");
                document.querySelector("#wordCount").textContent = `No. of words: 0`;
                document.querySelector("#characterCount").textContent = `No. of characters: 0`;
                let popupText = text.trimStart().length > 0 ? "Text area cleared!" : "Please write something first!";
                handlePopUpMessages(popupText);
              }}>Clear text
            </button>

            <button className="button">Text to speech</button>
          {/* </div>

          <div className="buttons-container"> */}
          {/* </div>

          <div className="buttons-container"> */}
            <button className="button" onClick={() => {
                navigator.clipboard.writeText(text);
                let popupText = text.trimStart().length > 0 ? "Text copied!" : "Please write something to be copied!";
                handlePopUpMessages(popupText);
              }}>Copy text
            </button>
            <button className="button">Convert language</button>
            <button className="button">Undo</button>
            <button className="button">Redo</button>
            <button
              className="button" onClick={() => {
                setText(text.replace(/\s+/g, " ").trim());
                let popupText = text.trimStart().length > 0 ? "Extra whitespaces removed!" : "Please write something first!!";
                handlePopUpMessages(popupText);
              }}>Remove extra spaces
            </button>
          </div>

          <div className="output">
            <h3>Text analytics</h3>
            <div className="counting-analytics">
              <p id="wordCount">No. of words: 0</p>
              <p id="characterCount">No. of chracters: 0</p>
            </div>
            <p>mins of read</p>
            <p>Text language:</p>
          </div>
        </div>

      </div>

      <div className="footer-mainConsole">
        <p>All right reserved | copyright 2024</p>
      </div>
    </>
  );
}

