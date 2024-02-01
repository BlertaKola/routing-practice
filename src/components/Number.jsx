import { useParams } from "react-router-dom";

const Number = (props) => {
    const { nr, color1, color2 } = useParams();
    return (
        <>

         <h1>{isNaN(nr) ? <p>The word is: {nr} {color1} {color2}</p>  :  <p>The number is: {nr}</p> }   </h1>
        </>
    )
}
export default Number;