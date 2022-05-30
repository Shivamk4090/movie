import React, { useState } from "react";
import { connect } from "react-redux";
function Test(props) {
  const [x, setX] = useState(1);
  return (
    <div>
      <center>
        Test value = {JSON.stringify(props)}
        <input
          type="number"
          value={x}
          onChange={(e) => {
            setX(e.target.value);
          }}
        />
        <button onClick={() => props.increaseX(x)}>Increase-X</button>
      </center>
    </div>
  );
}

//store se state ka value nikalo in props
const mapStateToProps = (state) => {
  return {
    x: state.test.x,
    y: state.test.y,
  };
};

// give new state/action to store
// will be paased as props to component
// define multiple dispatch

const mapDispatchToProps = (dispatch) => {
  return {
    increaseX: (x) => dispatch({ type: "INCREASEX", payload: x }),
  };
};

// 1. props to be passed to component
// 2. which component
export default connect(mapStateToProps, mapDispatchToProps)(Test); //under the hood return the JSX with props
