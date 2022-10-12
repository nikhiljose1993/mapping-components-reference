import React, { Fragment } from "react";

import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <Fragment>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emoji, index) => {
          return (
            <Entry
              key={index}
              emoji={emoji.emoji}
              name={emoji.name}
              meaning={emoji.meaning}
            />
          );
        })}
      </dl>
    </Fragment>
  );
}

export default App;
