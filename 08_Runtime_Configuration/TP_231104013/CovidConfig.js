const fs = require('fs');

class CovidConfig {
  constructor(configFile = 'covid_config.json') {
    this.configFile = configFile;
    this.defaultConfig = {
      satuan_suhu: 'celcius',
      batas_hari_deman: 14,
      pesan_ditolak: 'Anda tidak diperbolehkan masuk ke dalam gedung ini',
      pesan_diterima: 'Anda dipersilahkan untuk masuk ke dalam gedung ini'
    };
    this.config = this.loadConfig();
  }

  loadConfig() {
    if (fs.existsSync(this.configFile)) {
      const rawData = fs.readFileSync(this.configFile);
      return JSON.parse(rawData);
    } else {
      this.saveConfig(this.defaultConfig);
      return this.defaultConfig;
    }
  }

  saveConfig(config) {
    fs.writeFileSync(this.configFile, JSON.stringify(config, null, 2));
  }

  ubahSatuan() {
    this.config.satuan_suhu = this.config.satuan_suhu === 'celcius' ? 'fahrenheit' : 'celcius';
    this.saveConfig(this.config);
  }

  getConfig() {
    return this.config;
  }
}

module.exports = CovidConfig;
