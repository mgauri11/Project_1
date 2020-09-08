import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/");
    }
    return (
      <div>
        <button onClick={handleClick}>Logout</button>
      </div>
    );
}

export default Logout;