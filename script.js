alert("Aplikasi Cek Nilai");

const nama  =prompt("Masukkan nilai anda "); 
const nilai =prompt("Nilai :");

if (nilai >= 90 && nilai <=100) {
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat grade A`);
}
if (nilai >= 100) {
    alert(`Nilai tidak valid`)
}
else if (nilai >= 80) {
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat grade B`);
}
else if (nilai >= 70) {
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat grade C`);
}
else if (nilai >= 60) {
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat grade D`);
}
else {
    alert(`Siswa ${nama} dengan nilai ${nilai} mendapat grade E`);
}