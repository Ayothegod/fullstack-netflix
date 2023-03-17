import { useStore } from '@/lib/store'
import React from 'react'

const People = () => {
    const people = useStore(state => state.people)
  return (
    <div>
      <p>we have {people.length} in the DB</p>
        {people.map((p,id) => 
            <p key={id}>{p}</p>)}
    </div>
  )
}

export default People