<script setup>
import { ref } from 'vue';

// 1. Variabel reaktif
const message = ref('Halo, Vue!');
const count = ref(0);
const name = ref('');
const isVisible = ref(true);
const imageUrl = ref('/kucing.jpeg'); // Gambar dari folder 'public'
const imagePreview = ref('');

// 2. Event handler
const showAlert = () => alert('Tombol diklik!');
const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    imagePreview.value = URL.createObjectURL(file);
  }
};
</script>

<template>
  <div>
    <!-- Text Interpolation -->
    <h1>{{ message }}</h1>

    <!-- Variabel Reaktif (Counter) -->
    <p>Nilai: {{ count }}</p>
    <button @click="count++">Tambah</button>

    <!-- Form Binding -->
    <input v-model="name" placeholder="Masukkan nama" />
    <p>Nama Anda: {{ name }}</p>

    <!-- Event Listener -->
    <button @click="showAlert">Klik Saya</button>

    <!-- Attribute Binding -->
    <p>Gambar Kucing Lokal:</p>
    <img :src="imageUrl" alt="Kucing" width="200" />

    <!-- Upload Gambar -->
    <input type="file" @change="onFileChange" accept="image/*" />
    <div v-if="imagePreview">
      <p>Gambar yang diunggah:</p>
      <img :src="imagePreview" alt="Gambar unggahan" width="200" />
    </div>

    <!-- Conditional Rendering -->
    <button @click="isVisible = !isVisible">Toggle Teks</button>
    <p v-if="isVisible">Teks ini akan muncul atau hilang</p>
  </div>
</template>
