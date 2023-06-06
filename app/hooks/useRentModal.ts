import { create } from 'zustand';

interface RentModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

// Returns functions and state to toggle rent modal
const useRentModal = create<RentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));


export default useRentModal;
