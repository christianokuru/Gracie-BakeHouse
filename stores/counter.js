// stores/counter.js
import { defineStore } from 'pinia';
import { ref } from 'vue'; // We use `ref` to create reactive state

export const useCounterStore = defineStore('counter', () => {
  // Define reactive state using `ref`
  const counter = ref(0);

  // Define actions to modify the state
  const increment = () => {
    counter.value++;
  };

  const decrement = () => {
    counter.value--;
  };

  // Return state and actions
  return { counter, increment, decrement,};
}, {
  persist: true, // Persist the state across reloads
});
