alert("GAME TEBAK ANGKA \n tebak angka antara 1-10 \n anda punya 3 kesempatan");

const angkaBenar = 5;

for (let nyawa =3; nyawa >=1; nyawa --){
    const angkaTebakan = prompt("Masukkan angka tebakan anda");

    if (angkaTebakan == angkaBenar){
        alert(`Tebakan anda benar \n Angka yang dicari adalah ${angkaBenar}`);
        break;
    } else if (angkaTebakan > angkaBenar) {
        alert("Tebakan anda terlalu besar");
    } else if (angkaTebakan < angkaBenar) {
        alert("Tebakan anda terlalu kecil");
    }

    if (nyawa == 1) {
        alert(`Game over \n Angka yang dicari adalah ${angkaBenar}`);
    }
}