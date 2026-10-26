// =========================================================
// LATIHAN 1 & 2: Ubah Teks & Event Click Tombol Aksi
// =========================================================
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombolAksi = document.getElementById("tombolAksi");

if (judul && pesan && tombolAksi) {
    judul.textContent = "Belajar JavaScript DOM";
    pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

    tombolAksi.addEventListener("click", function () {
        pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
    });
}

// =========================================================
// LATIHAN 3: Mengubah Kelas dan Gaya CSS (Toggle)
// =========================================================
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

if (tombolGaya && teksGaya) {
    tombolGaya.addEventListener("click", function () {
        teksGaya.classList.toggle("highlight");
        teksGaya.classList.toggle("teks-besar");
    });
}

// =========================================================
// LATIHAN 4: Event Input & Penghitung Karakter
// =========================================================
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

if (namaInput && jumlahKarakter) {
    namaInput.addEventListener("input", function () {
        jumlahKarakter.textContent = namaInput.value.length;
    });
}

// =========================================================
// LATIHAN 5 & EKSPERIMEN MANDIRI NO. 2: Validasi Form Pendaftaran
// =========================================================
const formPendaftaran = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

if (formPendaftaran) {
    formPendaftaran.addEventListener("submit", function (event) {
        event.preventDefault();
        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const usiaInput = document.getElementById("usia").value;
        const usia = Number(usiaInput);
        const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nama === "" || nama.length < 3) {
            pesanForm.textContent = "Nama wajib diisi dan minimal 3 karakter.";
        } else if (!polaEmail.test(email)) {
            pesanForm.textContent = "Masukkan email yang valid.";
        } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
            pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
        } else {
            pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
            formPendaftaran.reset();
        }
    });
}

// =========================================================
// LATIHAN 6 & EKSPERIMEN MANDIRI NO. 1: To-Do List dengan Tombol Hapus
// =========================================================
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

if (tambahTugas) {
    tambahTugas.addEventListener("click", function () {
        const teks = inputTugas.value.trim();
        if (teks === "") {
            pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
            return;
        }

        const item = document.createElement("li");
        const label = document.createElement("span");
        const selesai = document.createElement("button");
        const hapus = document.createElement("button");

        label.textContent = teks + " ";
        
        selesai.type = "button";
        selesai.textContent = "Tandai selesai";
        selesai.addEventListener("click", function () {
            item.classList.toggle("selesai");
            selesai.textContent = item.classList.contains("selesai") 
                ? "Batalkan selesai" 
                : "Tandai selesai";
        });

        // Tombol Hapus (Eksperimen Mandiri No. 1)
        hapus.type = "button";
        hapus.textContent = "Hapus";
        hapus.className = "btn-hapus";
        hapus.addEventListener("click", function () {
            daftarTugas.removeChild(item);
            pesanTugas.textContent = "Tugas berhasil dihapus.";
        });

        item.append(label, selesai, hapus);
        daftarTugas.appendChild(item);

        inputTugas.value = "";
        pesanTugas.textContent = "Tugas ditambahkan.";
        inputTugas.focus();
    });
}

// =========================================================
// MINI PROJECT & EKSPERIMEN MANDIRI NO. 3: Form Workshop
// =========================================================
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const pilihanSesi = document.getElementById("pilihanSesi");
const infoSesi = document.getElementById("infoSesi");
const sisaKarakter = document.getElementById("sisaKarakter");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const ringkasanWorkshop = document.getElementById("ringkasanWorkshop");
const hasilRingkasan = document.getElementById("hasilRingkasan");

if (namaWorkshop && sisaKarakter) {
    namaWorkshop.addEventListener("input", function () {
        const sisa = 50 - namaWorkshop.value.length;
        sisaKarakter.textContent = sisa;
    });
}

// Event 'change' pada dropdown sesi (Eksperimen Mandiri No. 3)
if (pilihanSesi && infoSesi) {
    pilihanSesi.addEventListener("change", function () {
        if (pilihanSesi.value !== "") {
            infoSesi.textContent = "Anda memilih: " + pilihanSesi.value;
        } else {
            infoSesi.textContent = "";
        }
    });
}

if (formWorkshop) {
    formWorkshop.addEventListener("submit", function (event) {
        event.preventDefault();
        const namaVal = namaWorkshop.value.trim();
        const emailVal = emailWorkshop.value.trim();
        const sesiVal = pilihanSesi.value;
        const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (namaVal === "") {
            pesanWorkshop.style.color = "red";
            pesanWorkshop.textContent = "Nama lengkap wajib diisi.";
            ringkasanWorkshop.style.display = "none";
        } else if (!polaEmail.test(emailVal)) {
            pesanWorkshop.style.color = "red";
            pesanWorkshop.textContent = "Masukkan format email yang valid.";
            ringkasanWorkshop.style.display = "none";
        } else if (sesiVal === "") {
            pesanWorkshop.style.color = "red";
            pesanWorkshop.textContent = "Silakan pilih salah satu sesi workshop.";
            ringkasanWorkshop.style.display = "none";
        } else {
            pesanWorkshop.style.color = "green";
            pesanWorkshop.textContent = "Pendaftaran workshop berhasil dikirim!";
            hasilRingkasan.innerHTML = `<strong>Nama:</strong> ${namaVal} <br> <strong>Email:</strong> ${emailVal} <br> <strong>Sesi:</strong> ${sesiVal}`;
            ringkasanWorkshop.style.display = "block";
        }
    });

    formWorkshop.addEventListener("reset", function () {
        pesanWorkshop.textContent = "";
        ringkasanWorkshop.style.display = "none";
        if (sisaKarakter) sisaKarakter.textContent = "50";
        if (infoSesi) infoSesi.textContent = "";
    });
}

// =========================================================
// EKSPERIMEN MANDIRI NO. 4: Tombol Toggle Sembunyikan/Tampilkan Paragraf
// =========================================================
const paragrafToggle = document.getElementById("paragrafToggle");
const tombolToggle = document.getElementById("tombolToggle");

if (paragrafToggle && tombolToggle) {
    tombolToggle.addEventListener("click", function () {
        if (paragrafToggle.style.display === "none") {
            paragrafToggle.style.display = "block";
            tombolToggle.textContent = "Sembunyikan Paragraf";
        } else {
            paragrafToggle.style.display = "none";
            tombolToggle.textContent = "Tampilkan Paragraf";
        }
    });
}