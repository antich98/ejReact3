import { Button } from "react-bootstrap";
import { useState } from "react";

import React from 'react';

const Msg = () => {
    const [changed, setChanged] = useState(false);
    return (
        <div>
            <Button>Click here</Button>
        </div>
    );
};

export default Msg;
