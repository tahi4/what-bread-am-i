import './Quiz'
import { useState } from 'react'
import Quiz from './Quiz'
import datas from './questionData'
import './Quizpage.css'
import Results from './Results'



function Quizpage({unansweredIds, setUnansweredIds}){

    const [chosenItems, setchosenItems] = useState([])

     //  the button stays disabled until you answer all questions 
    const [showResult , setShowResult] = useState(false)
    function resultButton(){ setShowResult(true) }
    
    // mapping props into the quiz component

    const quizzie = datas.map(function(data){

        return (
    <Quiz
     key={data.id}
     quizItemId={data.id}
     question={data.question}
     option={
       { 
         one: data.options.one,
         two: data.options.two,
         three: data.options.three,
         four: data.options.four
        }
      }

     //passing state in so i can use it as a prop inside this component
     chosenItems={chosenItems}
     setchosenItems={setchosenItems}
     unansweredIds={unansweredIds}
     setUnansweredIds={setUnansweredIds}
     
    />
   
    
        )
    })

console.log(unansweredIds.length)


    return(
        <div className='quiz--page'>

       

        <section>{quizzie}</section>
        
        <button onClick={resultButton} disabled={!showResult && unansweredIds.length}>{showResult && !unansweredIds.length ? "Results are in! 🥁" : "I'm prepared to be cussed out 😨"}</button>
        <div>
        {/*  shows result component only when you press the button */}
      { showResult && !unansweredIds.length ? <Results chosenItems={chosenItems} /> : null }
        </div>



</div>
    )
}
export default Quizpage


