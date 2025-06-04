class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) {
      return PusatDataSingleton._instance;
    }
    this.DataTersimpan = [];
    PusatDataSingleton._instance = this;
  }

  static GetDataSingleton() {
    if (!PusatDataSingleton._instance) {
      PusatDataSingleton._instance = new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  GetSemuaData() {
    return this.DataTersimpan;
  }

  PrintSemuaData() {
    if (this.DataTersimpan.length === 0) {
      console.log("DataTersimpan kosong");
      return;
    }
    this.DataTersimpan.forEach((item, index) => {
      console.log(`${index}: ${item}`);
    });
  }

  AddSebuahData(input) {
    this.DataTersimpan.push(input);
  }

  HapusSebuahData(index) {
    if (index >= 0 && index < this.DataTersimpan.length) {
      this.DataTersimpan.splice(index, 1);
    } else {
      console.log(`Index ${index} tidak valid`);
    }
  }
}

const data1 = PusatDataSingleton.GetDataSingleton();
const data2 = PusatDataSingleton.GetDataSingleton();

data1.AddSebuahData("Anggota Kelompok 1");
data1.AddSebuahData("Anggota Kelompok 2");
data1.AddSebuahData("Asisten Praktikum");

console.log("Isi data 2 sebelum hapus:");
data2.PrintSemuaData();

data2.HapusSebuahData(2);

console.log("\nIsi data 1 setelah hapus Asisten Praktikum:");
data1.PrintSemuaData();

console.log("\nJumlah data di data 1:", data1.GetSemuaData().length);
console.log("Jumlah data di data 2:", data2.GetSemuaData().length);
