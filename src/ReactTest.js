import { useState } from "react";

function App() {

    const [name, setName] = useState('Varun');
    const [age, setAge] = useState(20);

    const handleClick = () => {
        setName('Akhil');
        setAge(30);
        console.log(name, age);
    }

    return (
        <div className="App">
            <div className="content">
                <h2>My Second React Website</h2>
                <p>{name} is {age} years old</p>
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    );
}

export default App;
