import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns]= useState(0);
    const [sixes, setSixes]= useState(0);

    const oneHandle =()=>{
        const addOne = runs + 1;
        setRuns(addOne)
    }
    const fourHandle =()=>{
        const addFour = runs + 4;
        setRuns(addFour)
    }
    const sixHandle = () =>{
        const addSix = runs + 6;
        const sixRuns = sixes + 1;
        setSixes(sixRuns);
        setRuns(addSix)
    }
    return(
        <div>
            <h3>Player: Bangali</h3>
            <p>Six Count : {sixes}</p>
            {
                runs > 50 && <h2>Congrats !!! Your Score is 50</h2>
            }
            <h2>Score: {runs}</h2>
            <button onClick={oneHandle}>One Run</button>
            <button onClick={fourHandle}>Four Run</button>
            <button onClick={sixHandle}>Six Run</button>
        </div>
    )
}