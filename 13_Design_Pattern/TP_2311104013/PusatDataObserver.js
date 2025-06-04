class PusatData {
  constructor() {
    this.observers = [];
    this.data = "";
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  setData(newData) {
    console.log(`PusatData: Mengubah data menjadi '${newData}'`);
    this.data = newData;
    this.notify();
  }

  getData() {
    return this.data;
  }
}

class Pengamat {
  constructor(nama) {
    this.nama = nama;
  }

  update(subject) {
    console.log(`${this.nama} menerima update: data baru adalah '${subject.getData()}'`);
  }
}

const pusat = new PusatData();

const pengamat1 = new Pengamat("Observer 1");
const pengamat2 = new Pengamat("Observer 2");

pusat.attach(pengamat1);
pusat.attach(pengamat2);

pusat.setData("Data 1");

pusat.detach(pengamat2);

pusat.setData("Data 2");
