import  questions  from './questionsData';
import "./quiz.css"
const Quiz = () => {
    const data = questions.map( (d) => d.question)

    return (
        <div className="quiz">
            <h1>{data}</h1>
            
        </div>
    )
}


export default Quiz;