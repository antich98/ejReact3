import { Button } from "react-bootstrap";
import { useState } from "react";
const Titulos = (props) => {
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(true);
    }
    return (
        <div  className="container-fluid">  
        <h1>
            Hello {props.tituloNuevo}{clicked ? ' (from changed state)' : ''} 
        </h1>
        <Button onClick={handleClick}>Click here</Button>
        </div>
    );
};

export default Titulos;