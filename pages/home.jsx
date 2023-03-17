import People from "@/components/People"
import { useStore } from "@/lib/store"
import { useRef, useState } from "react"

const Home = () => {
  const addPerson = useStore((state) => state.addPerson)
  const puppy = useStore((state) => state.puppy)
  const addPuppy = useStore(state => state.addPuppy)
  const inputRef = useRef()
  const darkmode = useStore(state => state.darkmode)
  const changeDarkmode = useStore(state => state.changeDarkmode)


  const add = () => {
    addPerson(inputRef.current.value)
  }
  
   
  return (
    <div className={ darkmode ? 'bg-white' : 'bg-black text-white'}>
      <div>
        <p>{puppy} of puppies in here</p>
        <button className="bg-slate-500
             text-white p-1 rounded-md ml-2" 
          onClick={addPuppy} >add puppy</button>
      </div>
  
      <div>
        <p className={darkmode ? 'text-green font-bold ' : 'text-red-500 '}>{darkmode ? 'darkmode oon' : 'darkmode off' }</p>
        <button onClick={changeDarkmode}>toggle darkmode</button>
      </div>

        <section className="mt-72">
            <input type="text" placeholder="name" 
             ref={inputRef}
             className='border border-slate-500 rounded-md p-1' />

            <button className="bg-slate-500
             text-white p-1 rounded-md ml-2" onClick={add} >add</button>
            <People/>
        </section>

    </div>
  )
}
//onClick={() => setName(name)}
//onChange={(e) => setName(e.target.value)}

export default Home