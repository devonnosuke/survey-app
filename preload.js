const { contextBridge } = require("electron");

// Ekspor fungsi atau variabel yang diperlukan
contextBridge.exposeInMainWorld("electronAPI", {
  // Fungsi atau event listener lain bisa ditambahkan di sini
});
