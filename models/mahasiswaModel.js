
let mahasiswa = [
    {
        id: 1,
        nim: "2026001",
        nama: "Andi Saputra",
        prodi: "Teknik Informatika"
    },
    {
        id: 2,
        nim: "2026002",
        nama: "Budi Santoso",
        prodi: "Sistem Informasi"
    }
];

// Menampilkan seluruh data mahasiswa
function getAllMahasiswa() {
    return mahasiswa;
}

// Menampilkan mahasiswa berdasarkan ID
function getMahasiswaById(id) {
    return mahasiswa.find((item) => item.id === Number(id));
}

// Menambahkan data mahasiswa
function createMahasiswa(data) {
    const mahasiswaBaru = {
        id: mahasiswa.length > 0
            ? Math.max(...mahasiswa.map((item) => item.id)) + 1
            : 1,
        nim: data.nim,
        nama: data.nama,
        prodi: data.prodi
    };

    mahasiswa.push(mahasiswaBaru);
    return mahasiswaBaru;
}

// Mengubah data mahasiswa
function updateMahasiswa(id, data) {
    const index = mahasiswa.findIndex(
        (item) => item.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    mahasiswa[index] = {
        ...mahasiswa[index],
        nim: data.nim,
        nama: data.nama,
        prodi: data.prodi
    };

    return mahasiswa[index];
}

// Menghapus data mahasiswa
function deleteMahasiswa(id) {
    const index = mahasiswa.findIndex(
        (item) => item.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    const mahasiswaDihapus = mahasiswa.splice(index, 1);
    return mahasiswaDihapus[0];
}

module.exports = {
    getAllMahasiswa,
    getMahasiswaById,
    createMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
};
