import { writable } from 'svelte/store'

type AppState = {
    isSidebarOpen: boolean;
}

const initialState: AppState = {
    isSidebarOpen: false,
}

const configureStore = () => {
    const { subscribe, set, update } = writable<AppState>(initialState)

    return {
        subscribe,
        toggleSidebar: () => update((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
    }
}

const appState = configureStore();
export default appState;