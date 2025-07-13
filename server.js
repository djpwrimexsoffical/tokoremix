const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const dataPesanan = {
  1: [
    {
      nama: "Style loFi - Maman Fvndy",
      tanggalSelesai: "2025-07-14"
    },
    {
      nama: "Gaya Funkot - DJ MbonMbon",
      tanggalSelesai: "2025-07-12"
    }
  ],
  2: [] // User ID lain
};

// Endpoint API
app.get('/api/pesanan', (req, res) => {
  const userId = req.query.userId;
  const pesanan = dataPesanan[userId] || [];
  res.json(pesanan);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
