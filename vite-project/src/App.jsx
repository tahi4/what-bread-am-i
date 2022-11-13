import { useState, useEffect } from 'react'
import './App.css'
import Intro from './Intro'
import Quizpage from './Quizpage'
import datas from './questionData'  



function App() {


const [togg , setTogg] = useState(true)

function quizPageOpen(){
 setTogg(false)
}

// tells me which question ids are left to be answered

const [unansweredIds, setUnansweredIds] = useState([])

useEffect(() => {
  const unansweredId = datas.map(({id}) => id)
  setUnansweredIds(unansweredId)
}, [datas])

console.log(unansweredIds)

return (
 
 <div className='App'>

{ togg ? <Intro quizPageOpen={quizPageOpen} /> : <Quizpage unansweredIds={unansweredIds} setUnansweredIds={setUnansweredIds}/> }

  </div>
)

}
export default App
