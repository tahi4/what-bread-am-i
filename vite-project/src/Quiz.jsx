import { useState , useEffect} from 'react'
import './Quiz.css'



// destructred all the props, cause my code was getting repetitive
function Quiz({quizItemId, question, chosenItems, setchosenItems, option, unansweredIds, setUnansweredIds}) {

const [toggleDisabledButton, settoggleDisabledButton] = useState(false)

 function handleClick(e){
  
  // styles selected button
  const styles =e.currentTarget.style
  styles.backgroundColor = '#D6DBF5'
  styles.border = 'none'

  //the state is technically coming in the form of a prop
  //i couldnt put the state directly here or it wouldnt have collected all sample data together
  
  // it stores your buttons id when you press it
  const event = e.currentTarget.id
  setchosenItems((prevState) => [...prevState, event])

  // this filters through the remainig questions
  // each time you solve a question, its id no. gets removed from the array
  setUnansweredIds(unansweredIds.filter((id) => id != quizItemId))

  
 }



//  basically disables the rest of the buttons when you select one
 const ValidPick = !unansweredIds.includes(quizItemId) && !chosenItems.includes((e) => e.currentTarget.id )

 useEffect(() => {
  // ⛔️ Too many re-renders. React limits the number
  // of renders to prevent an infinite loop.
  if(ValidPick){
    return settoggleDisabledButton(true)
   }
   

}, [toggleDisabledButton])

// if(ValidPick){
//  return settoggleDisabledButton((prevState) => !prevState)
// }
console.log(toggleDisabledButton)

return(
<div className=''>

<h2 className='quiz--questions'  id={quizItemId}>{question}</h2>
    <div className='quiz--options'>

    <button id='baguette' onClick={handleClick}  disabled={toggleDisabledButton}>{option.one}</button>
    <button id='whiteBread' onClick={handleClick} disabled={ValidPick} >{option.two}</button>
    <button id='pita' onClick={handleClick}  disabled={ValidPick}>{option.three}</button>
    <button id='bagel' onClick={handleClick}  disabled={ValidPick} >{option.four}</button>


    </div>

       
      </div>
      
  )
}
export default Quiz