import React from "react";
import ReactDOM from "react-dom";
import emojipedia from "./emojipedia";
import "./styles.css";
const entry = (
  emojipedia.map(emoji => <div className="term">
    <dt>
      <span>{emoji.name}</span>
      <span className="emoji" role="img">{emoji.icon}</span>
    </dt>
    <dd>{emoji.meaning}</dd>
    </div>)
)
const app = (
  <div>
      <h1>EMOJIS</h1>
    <dl className="dictionary">
      {entry}
    </dl>
  </div>
)

ReactDOM.render(app, document.getElementById("root"))