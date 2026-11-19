
const express = require("express");
const router = express.Router();

const mahasiswaController = require("../controllers/mahasiswaController");

// GET - Menampilkan seluruh mahasiswa
router.get("/", mahasiswaController.getAllMahasiswa);

// GET - Menampilkan detail mahasiswa berdasarkan ID
router.get("/:id", mahasiswaController.getMahasiswaById);

// POST - Menambahkan mahasiswa
router.post("/", mahasiswaController.createMahasiswa);

// PUT - Mengubah data mahasiswa berdasarkan ID
router.put("/:id", mahasiswaController.updateMahasiswa);

// DELETE - Menghapus mahasiswa berdasarkan ID
router.delete("/:id", mahasiswaController.deleteMahasiswa);

module.exports = router;
