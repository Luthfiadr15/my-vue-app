<script setup>
import { ref, computed, watch, onMounted } from 'vue';

const items = ref([
  { id: 1, name: 'Vue.js' },
  { id: 2, name: 'React' },
  { id: 3, name: 'Angular' },
]);

const count = ref(0);
const doubleCount = computed(() => count.value * 5);

watch(count, (newValue, oldValue) => {
  console.log(`Count berubah dari ${oldValue} ke ${newValue}`);
});

const messageRef = ref(null);

onMounted(() => {
  console.log('Komponen telah dimuat!');
  if (messageRef.value) {
    messageRef.value.style.color = 'blue';
  }
});

const increment = () => {
  count.value++;
};
</script>

<template>
  <div>
    <h1 ref="messageRef">Tutorial Vue JS</h1>

    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>

    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Tambah</button>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
button {
  padding: 10px;
  background-color: #42b883;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #35495e;
}
</style>
