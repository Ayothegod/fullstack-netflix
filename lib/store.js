import {create} from 'zustand'

export const useModal = create((set) => ({
    modal:false,
    changeModal:() => set((state) => ({
        open: !state.open
    }))
}))



//const bears = useStore((state) => state.bears)
//const increasePopulation = useStore((state) => state.increasePopulation)