import React from "react";
import { buttonStyle } from "./buttons.css";

function Popup() {
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }

  return (
    <button
      className={buttonStyle}
      onClick={async () => {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });

        chrome.scripting.executeScript({
          target: { tabId: tab.id! },
          function: setPageBackgroundColor,
        });
      }}
    ></button>
  );
}

export default Popup;
