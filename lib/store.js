import {create} from 'zustand'
import {devtools, persist,createJSONStorage} from 'zustand/middleware'

// let store  = (set) => ({
//     puppy:4,
//     darkmode:true,
//     people:['ayo','ade'],
//     addPerson:(person) => set((state) => ({people:[...state.people,person]})),
//     addPuppy:() => set((state) => ({
//         puppy:state.puppy + 1
//     })),
//     changeDarkmode:() => set((state) => ({
//         darkmode: !state.darkmode
//     }))
// })
export const useToggle = create((set) => ({
    open:false,
    changeToggle:() => set((state) => ({
        open: !state.open
    }))
}))

// store = devtools(store)
// store = persist(store)
// export const useStore = create(devtools(store))

