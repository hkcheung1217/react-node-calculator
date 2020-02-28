import React from "react";

import "./keys.styles.scss";

const Keys = ({ onClick }) => (
  <div className="keys">
    <div>
      <button className="outer" name="(" onClick={e => onClick(e.target.name)}>
        (
      </button>
      <button className="outer" name=")" onClick={e => onClick(e.target.name)}>
        )
      </button>
      <button className="outer" name="C" onClick={e => onClick(e.target.name)}>
        C
      </button>
      <button className="outer" name="CE" onClick={e => onClick(e.target.name)}>
        CE
      </button>
    </div>
    <div>
      <button name="7" onClick={e => onClick(e.target.name)}>
        7
      </button>
      <button name="8" onClick={e => onClick(e.target.name)}>
        8
      </button>
      <button name="9" onClick={e => onClick(e.target.name)}>
        9
      </button>
      <button className="outer" name="/" onClick={e => onClick(e.target.name)}>
        ÷
      </button>
    </div>
    <div>
      <button name="4" onClick={e => onClick(e.target.name)}>
        4
      </button>
      <button name="5" onClick={e => onClick(e.target.name)}>
        5
      </button>
      <button name="6" onClick={e => onClick(e.target.name)}>
        6
      </button>
      <button className="outer" name="*" onClick={e => onClick(e.target.name)}>
        x
      </button>
    </div>
    <div>
      <button name="1" onClick={e => onClick(e.target.name)}>
        1
      </button>
      <button name="2" onClick={e => onClick(e.target.name)}>
        2
      </button>
      <button name="3" onClick={e => onClick(e.target.name)}>
        3
      </button>
      <button className="outer" name="-" onClick={e => onClick(e.target.name)}>
        -
      </button>
    </div>
    <div>
      <button name="0" onClick={e => onClick(e.target.name)}>
        0
      </button>
      <button name="." onClick={e => onClick(e.target.name)}>
        .
      </button>
      <button className="equal" name="=" onClick={e => onClick(e.target.name)}>
        =
      </button>
      <button className="outer" name="+" onClick={e => onClick(e.target.name)}>
        +
      </button>
    </div>
  </div>
);

export default Keys;
