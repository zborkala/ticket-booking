import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [distance, setDistance] = useState(0)
  const [fare, setFare] = useState(0)
  const [responseMessage, setResponseMessage] = useState('')

  useEffect(() => {
    if(age <= 5) {
      setFare(0)
    } else if(age <= 15) {
      setFare(2 * distance)
    } else if(age >= 60) {
      setFare(5 * distance)
    } else {
      setFare(10 * distance)
    }
  }, [age, distance])

  return (
    <div>
      <h4>New Ticket</h4>
      <p>Fare: {fare}</p>
      <p>{responseMessage}</p>
      <label>Name</label><br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <label>Age</label><br />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} /><br />
      <label>Distance</label><br />
      <input type="text" value={distance} onChange={(e) => setDistance(e.target.value)} /><br />
      <button onClick={async () => {
        const res = await axios.post('http://localhost:4000/tickets/new', {
          name: name,
          age: age,
          fare: fare,
          distance: distance
        })
        setResponseMessage(res.data)
      }}>Submit</button>
    </div>
  );
}

export default App;
