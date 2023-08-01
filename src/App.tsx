import { useEffect, useState } from 'react';
import './App.css';
import { useFetch } from 'use-http';

function App() {
  const [age, setAge] = useState(0)
  const [message, setMessage] = useState("")
  const personGreeting = (personName: string, personAge: number) => {
    setAge(personAge)
    setMessage(`Hello ${personName} you are ${personAge} years old`)
  }
  const options = {}
  const { loading, error, data = [] } = useFetch('https://picsum.photos/id/0/info', options, [])


  useEffect(() => {
    personGreeting("James", 24)
  }, [age, message])

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;