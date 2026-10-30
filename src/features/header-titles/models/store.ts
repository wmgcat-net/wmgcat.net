import { create } from "zustand";

const useHeader = create<{
	/** Header title */
	title: string;
	/** Set new header title */
	setTitle: (title: string) => void;
}>((set) => ({
	title: "",
	setTitle: (title) => set({ title })
}));

export default useHeader;
