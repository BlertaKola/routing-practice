import { useParams } from "react-router-dom"


const Word = (props) => {
    const {word, color1, color2} = useParams();
    return (
        <>
        
        <h1 style={{color: `${color1}`, backgroundColor: `${color2}`}}>{isNaN(word) ? <p>{word}</p> : word}</h1>
        
        </>
    )
}

export default Word;