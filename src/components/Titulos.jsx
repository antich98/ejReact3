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
        <button onClick={handleClick}>Click here</button>
        </div>
    );
};

export default Titulos;