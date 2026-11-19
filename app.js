
const express = require("express");
const mahasiswaRoutes = require("./routes/mahasiswaRoutes");

const app = express();
const PORT = 3000;

// Middleware untuk membaca data JSON
app.use(express.json());

// Menggunakan routes mahasiswa
app.use("/api/mahasiswa", mahasiswaRoutes);

// Menangani alamat yang tidak ditemukan
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint tidak ditemukan"
    });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log("==================================");
    console.log(" SISTEM INFORMASI DATA MAHASISWA");
    console.log("==================================");
    console.log("Server berjalan di http://localhost:" + PORT);
    console.log("API: http://localhost:" + PORT + "/api/mahasiswa");
});
