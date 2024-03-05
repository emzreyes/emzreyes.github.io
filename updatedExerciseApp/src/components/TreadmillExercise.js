import StopWatch from './StopWatch2';

export default function TreadmillExercise({exercise, setMenuScreen}) {
    let {name} = exercise
    return <div>
        <p>{name}</p>
        <StopWatch/>
        <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
    
    }

    // this will later include a clicker for 1-10 that will represent the level of difficulty selected for the work out
    // will also possibly later include a similar clicker to indicate incline