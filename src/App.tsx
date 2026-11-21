import { useState } from 'react'
import './App.css'
import ButtonComp from './components/buttonComp'
import InputComp from './components/InputComp'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <>
      <h1>Reusable UI-library</h1>
      <hr></hr>
      <ButtonComp variant='primary' size='large'>button</ButtonComp><br></br>
      <ButtonComp variant='secondary' size='medium'>button</ButtonComp><br></br>
      <ButtonComp variant='danger' size='small'>button</ButtonComp><br></br>
      <ButtonComp variant='primary' size='large' disabled={true}>button</ButtonComp>
      <hr></hr>
      <InputComp label='name' value={name} onChange={setName} placeholder='please enter name'></InputComp>
      <InputComp label='email' value={email} onChange={(e)=>setEmail(e)} placeholder='please enter email' error='errrrrrrorrr'></InputComp>
    </>
  )
}

export default App
