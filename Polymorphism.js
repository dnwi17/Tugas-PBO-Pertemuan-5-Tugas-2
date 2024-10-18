// Class Utama
class Kapal {
    constructor(nama, panjang, lebar) {
        this.nama = nama;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    berlayar() {
        return `${this.nama} sedang berlayar.`;
    }

    berhenti() {
        return `${this.nama} sedang berhenti di pelabuhan.`;
    }
}

// Subclass 1: Kapal Penumpang
class KapalPenumpang extends Kapal {
    constructor(nama, panjang, lebar, kapasitasPenumpang) {
        super(nama, panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    berlayar() {
        return `Kapal penumpang ${this.nama} sedang berlayar dengan kapasitas ${this.kapasitasPenumpang} penumpang.`;
    }

    berhenti() {
        return `Kapal penumpang ${this.nama} sedang berhenti untuk menurunkan penumpang.`;
    }
}

// Subclass 2: Kapal Kargo
class KapalKargo extends Kapal {
    constructor(nama, panjang, lebar, muatan) {
        super(nama, panjang, lebar);
        this.muatan = muatan;
    }

    berlayar() {
        return `Kapal kargo ${this.nama} sedang berlayar membawa muatan sebesar ${this.muatan} ton.`;
    }

    berhenti() {
        return `Kapal kargo ${this.nama} sedang berhenti untuk membongkar muatan.`;
    }
}

// Subclass 3: Kapal Ikan
class KapalIkan extends Kapal {
    constructor(nama, panjang, lebar, jumlahJaring) {
        super(nama, panjang, lebar);
        this.jumlahJaring = jumlahJaring;
    }

    berlayar() {
        return `Kapal ikan ${this.nama} sedang berlayar dengan ${this.jumlahJaring} jaring untuk menangkap ikan.`;
    }

    berhenti() {
        return `Kapal ikan ${this.nama} sedang berhenti di pelabuhan untuk memuat hasil tangkapan.`;
    }
}

// Subclass 4: Kapal Perang
class KapalPerang extends Kapal {
    constructor(nama, panjang, lebar, jenisSenjata) {
        super(nama, panjang, lebar);
        this.jenisSenjata = jenisSenjata;
    }

    berlayar() {
        return `Kapal perang ${this.nama} sedang berlayar dengan persenjataan ${this.jenisSenjata}.`;
    }

    berhenti() {
        return `Kapal perang ${this.nama} sedang berhenti untuk melakukan perawatan dan persiapan senjata.`;
    }
}

// Menggunakan Polymorphism
const kapal1 = new KapalPenumpang("Oasis of the Seas", 300, 50, 3000);
const kapal2 = new KapalKargo("CargoX", 200, 40, 5000);
const kapal3 = new KapalIkan("Nelayan", 100, 25, 10);
const kapal4 = new KapalPerang("Destroyer", 150, 30, "Meriam 120mm");

function aktivitasKapal(kapal) {
    console.log(kapal.berlayar());
    console.log(kapal.berhenti());
}

// Memanggil metode menggunakan polymorphism
aktivitasKapal(kapal1);
aktivitasKapal(kapal2);
aktivitasKapal(kapal3);
aktivitasKapal(kapal4);
