import './Results.css'
import resultsData from './resultsData'
import brownbreadImg from './assets/image 5.png'

// count was the only parameter i needed from the QuizPage

function Results({chosenItems}){
  
    

    //  counts the amount of repeated objects
    const countDuplicatedObjects = {};
    chosenItems.forEach(function(i) { countDuplicatedObjects[i] = (countDuplicatedObjects[i]||0) + 1;});
    console.log(countDuplicatedObjects)


    // filters through all the values, and gives us the max value with name
    function getMaxVal(object){
        return Object.keys(object).filter(x => {
             return object[x] == Math.max.apply(null, 
             Object.values(object))
       })
    }

    // if theres a same value choose randomly between them, or else just the largest value
     function answerSelector(object){if(getMaxVal(object)[0] = getMaxVal(object)[1])
    {
      const selectedAnswer =  Math.random() < 0.5 ?  getMaxVal(object)[0] : getMaxVal(object)[1]  
  
      return(selectedAnswer)
   }  else{
      return(getMaxVal(object))
      }}

// this is the basically checking for the result and putting appropriate values in (made it dynmic)

let results;
    resultsData.forEach((a)=>{

        if(answerSelector(countDuplicatedObjects) == (`${a.breadId}`)){
        return results = (<div className='results--card'>
        <div className='result--text'>
        <h1 className='bread'>{a.breadName}</h1>
        <p className='comment'> {a.comment}</p>
        </div>
        <img src={a.breadImg} />
        </div>)
    } else if(answerSelector(countDuplicatedObjects) == !(`${a.breadId}`)){
        return results = (<div className='results--card'>
        <div className='result--text'>
        <h1 className='bread'>Brown Bread</h1>
        <p className='comment'>If you've received this, you're one of the few lucky ppl who got a nice message xD Hope you have a good day! </p>
        </div>
        <img src={brownbreadImg} />
        </div>)

    }


    

})





return(
 
  <div>{results}</div>
)

}
export default Results



// this was the prev bulky code i wnted to replace



// function layoutDesign(object){
//     if(answerSelector(object) == 'whiteBread'){
//         return `White Bread, you're basic as HELL`
//     } else if(answerSelector(object) == 'brownBread'){
//         return (<div><h1>Brown Bread, PLEASE youre not all that lmao</h1>
//         <p>lol ok</p></div>)
//     }else if(answerSelector(object) == 'bagel'){
//         return `Bagel, ok you're kinda cool ngl`
//     }else if(answerSelector(object) == 'crossaint') { return `Crossaint, oh arent you special hmph`}
    
//     }