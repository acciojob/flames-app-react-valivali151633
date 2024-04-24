import React, {useState} from "react";
import '../styles/App.css';

const relations = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"]
function calculateRelation(input1 , input2) {
    let obj = {};
    let n = input1.length;
    let m = input2.length;
    for(let i = 0 ; i < n ; i++)
    {
        let char = input1[i];
        if(obj[char]){
            obj[char]++;

        }else{
            obj[char] = 1
        }
    }
    let common = 0;
    for(let i = 0 ; i < m; i++)
    {
       let char = input2[i];
       if(obj[char]){
        obj[char]--;
        common++;
       }
    }

    return relations[(n + m - 2*common) % 6]

}

const App = ()=>{
    const[input1 , setInput1] = useState("");
    const[input2 , setInput2] = useState("");
    const[relation, setRelation] = useState("")

    const claculate = () => {
           setRelation(calculateRelation(input1 , input2))
    }
     const clear =()=>{
        setInput1('')
        setInput2('')
        setRelation('')
     }

    return(
        <div id = "main">
            <input
               value = {input1}
               data-testid="input1"
               type="text"
               placeholder="Entet Name"
               onChange={(e)=>setInput1(e.target.value)}
            />
            <input
               value = {input2}
               data-testid="input2"
               type="text"
               placeholder="Entet Name"
               onChange={(e)=>setInput2(e.target.value)}
             />

            <button
                data-testid ="calculate_relationship"
                onClick={claculate}
            >Calculate Relationship
            </button>
            <button
                data-testId="clear"
                onClick={clear}
            >Clear
            </button>
            {relation && <h3 data-testId="answer">{relation}</h3>}
        </div>
    )
}


export default App;
