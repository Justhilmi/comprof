alert("Aplikasi Cek Nilai")

const nama = prompt("Masukkan nama siswa");
const nilai = prompt("Masukkan nilai siswa");

// alert("Nama " + nama + " nilai " + nilai);
// alert('Nama ${nama} nilai ${nilai}');

if(nilai >= 90 && nilai <= 100) {
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat A`);
}

if(nilai > 100) {
    alert(`Nilai terlalu tinggi, harap masukkan dengan benar!`);
}

else if (nilai >= 80 && nilai <= 89) {
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat B`);
}

else if (nilai >= 70 && nilai <= 79) {
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat C`);
}

else if (nilai >= 60 && nilai <= 69) {
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat D`);
}

else {
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat E`);
}