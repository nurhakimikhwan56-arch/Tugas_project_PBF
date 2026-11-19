
const mahasiswaModel = require("../models/mahasiswaModel");

// Menampilkan seluruh data mahasiswa
function getAllMahasiswa(req, res) {
    const data = mahasiswaModel.getAllMahasiswa();

    res.status(200).json({
        success: true,
        message: "Data mahasiswa berhasil ditampilkan",
        data: data
    });
}

// Menampilkan detail mahasiswa berdasarkan ID
function getMahasiswaById(req, res) {
    const data = mahasiswaModel.getMahasiswaById(req.params.id);

    if (!data) {
        return res.status(404).json({
            success: false,
            message: "Data mahasiswa tidak ditemukan"
        });
    }

    res.status(200).json({
        success: true,
        message: "Detail mahasiswa berhasil ditampilkan",
        data: data
    });
}

// Menambahkan mahasiswa baru
function createMahasiswa(req, res) {
    const { nim, nama, prodi } = req.body;

    if (!nim || !nama || !prodi) {
        return res.status(400).json({
            success: false,
            message: "NIM, nama, dan prodi wajib diisi"
        });
    }

    const data = mahasiswaModel.createMahasiswa({
        nim,
        nama,
        prodi
    });

    res.status(201).json({
        success: true,
        message: "Data mahasiswa berhasil ditambahkan",
        data: data
    });
}

// Mengubah data mahasiswa
function updateMahasiswa(req, res) {
    const { nim, nama, prodi } = req.body;

    if (!nim || !nama || !prodi) {
        return res.status(400).json({
            success: false,
            message: "NIM, nama, dan prodi wajib diisi"
        });
    }

    const data = mahasiswaModel.updateMahasiswa(
        req.params.id,
        { nim, nama, prodi }
    );

    if (!data) {
        return res.status(404).json({
            success: false,
            message: "Data mahasiswa tidak ditemukan"
        });
    }

    res.status(200).json({
        success: true,
        message: "Data mahasiswa berhasil diperbarui",
        data: data
    });
}

// Menghapus mahasiswa
function deleteMahasiswa(req, res) {
    const data = mahasiswaModel.deleteMahasiswa(req.params.id);

    if (!data) {
        return res.status(404).json({
            success: false,
            message: "Data mahasiswa tidak ditemukan"
        });
    }

    res.status(200).json({
        success: true,
        message: "Data mahasiswa berhasil dihapus",
        data: data
    });
}

module.exports = {
    getAllMahasiswa,
    getMahasiswaById,
    createMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
};
