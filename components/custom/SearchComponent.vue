<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    default: "Search...",
  },
});

const emit = defineEmits(["update:modelValue", "search"]);

// Handle search when Enter is pressed
const handleKeyDown = (event) => {
  if (event.key === "Enter") {
    emit("search", props.modelValue);
  }
};

// Handle search when button is clicked
const handleSearch = () => {
  emit("search", props.modelValue);
};
</script>

<template>
  <div class="relative w-[500px] max-w-md">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keydown="handleKeyDown"
      :placeholder="placeholder"
      class="w-full rounded-full border border-purple-500 outline-none p-3 pr-12 text-gray-700 focus:ring-2 focus:ring-purple-500"
    />
    <button
      @click="handleSearch"
      class="absolute right-2 top-1/2 -translate-y-1/2 bg-[#C8A2C8] hover:bg-[#ad7fad] text-white px-4 py-2 rounded-full"
    >
      Search
    </button>
  </div>
</template>
