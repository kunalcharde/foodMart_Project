
import { create } from 'zustand'

export const useStore = create((set) => ({
    data : [], 
    setData: (apiResp) => set((state) => ({data: [...apiResp]})),
}))
