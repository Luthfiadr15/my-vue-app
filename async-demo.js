// 1. Menggunakan Callback
function fetchDataCallback(callback) {
    setTimeout(() => {
      callback("Data dari Callback berhasil diambil");
    }, 2000);
  }
  
  // 2. Menggunakan Promise
  function fetchDataPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data dari Promise berhasil diambil");
      }, 2000);
    });
  }
  
  // 3. Menggunakan Async/Await
  async function fetchDataAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data dari Async/Await berhasil diambil");
      }, 2000);
    });
  }
  
  // Menjalankan dan menampilkan hasil
  console.log("Mulai");
  
  // Callback
  fetchDataCallback((result) => {
    console.log(result);
  
    // Promise
    fetchDataPromise().then((result) => {
      console.log(result);
  
      // Async/Await
      (async function () {
        const result = await fetchDataAsync();
        console.log(result);
        console.log("Selesai");
      })();
    });
  });
  