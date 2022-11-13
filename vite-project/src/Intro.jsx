import './Intro.css'

// our intro page

function Intro(props) {


  return (
  

       <div className='intro'>

 <div className='intro--text'>

       <h1>Which 🍞 am I? </h1>
       <p>Find out the answer to the age-old question we've all pondered over. </p>
 </div>
       {/* upon clicking the button you get transferred to the quiz page */}
       <button onClick={props.quizPageOpen}>Start quiz</button>

     

 </div>
          
      
  )
}

export default Intro
