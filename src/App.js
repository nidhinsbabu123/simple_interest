import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';
import { useState } from 'react';

function App() {

  const[principle,setPrinciple] = useState("")
  const[rate,setRate] = useState("")
  const[year,setYear] = useState("")
  const[interest,setInterest] = useState(0)

  

  const calculateInterest=(e)=>{


    // preventDefault - to prevent the form NOT to refresh automatically while we submit the form
    e.preventDefault()
    console.log(principle, rate, year);

    if(!principle||!rate||!year){
      alert('Please fill the form completely')
    }
    else{
      setInterest(principle*rate*year/100)
    }



  }

  const resetForm=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setInterest(0)
  }


  return (
    <>

      <div className='app'>
        <div className='container'>

          <div className='heading-text'>

            <h2 className='title'>SIMPLE INTEREST CALCULATOR</h2>

            <p className='title-para'>Calculate your Simple Interest easily</p>

          </div>

          <div className='amount-card'>

            <div className='card-text'>

              <h3 className='total-amount'> ₹{interest} </h3>

              <p className='total-para'> Total Simple Interest </p>

            </div>

          </div>

          <form onSubmit={calculateInterest}>

            <div className='text-field'>

              {/* Principle Amout */}

              <div className='output'>

                <TextField value={principle||""} onChange={e=>setPrinciple(e.target.value)} id="outlined-basic" label="₹ Principle Amount" variant="outlined" />


              </div>

              {/* Rate of interest */}

              <div className='output'>

                <TextField value={rate||""} onChange={e=>setRate(e.target.value)} id="outlined-basic" label="Rate of Interest (P.A)%" variant="outlined" />


              </div>

              {/* Time Period */}

              <div className='output'>

                <TextField value={year||""} onChange={e=>setYear(e.target.value)} id="outlined-basic" label="Time Period (Per Year)" variant="outlined" />


              </div>

            </div>

            <div className='btn-group'>

              <Stack direction="row" spacing={2}>
                <Button type='submit' className='btn' style={{backgroundColor: 'green'}} variant="contained">Calculate</Button>
                <Button onClick={resetForm} className='btn' style={{backgroundColor: 'red'}} variant="contained">Reset</Button>
              </Stack>


            </div>


          </form>

        </div>
      </div>

    </>
  );
}

export default App;
