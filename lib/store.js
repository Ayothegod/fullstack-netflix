import {create} from 'zustand'
import {devtools, persist,createJSONStorage} from 'zustand/middleware'

let store  = (set) => ({
    people:['ayo','ade'],
    addPerson:(person) => set((state) => ({people:[...state.people,person]})),
})
// export const useToggle = create((set) => ({
//     open:false,
//     changeToggle:() => set((state) => ({
//         open: !state.open
//     }))
// }))

// store = devtools(store)
// store = persist(store)
export const useStore = create(devtools(store))

