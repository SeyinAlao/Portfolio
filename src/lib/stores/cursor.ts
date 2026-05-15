import { writable } from 'svelte/store';

export const cursorState = writable({
    type: 'default', 
    text: ''        
});