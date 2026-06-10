// Nama file: index.js
const axios = require('axios');

const SAP_URL = 'https://<alamat-server-sap>:<port>/sap/opu/odata/sap/ZWEB_CONNECTION_SRV/';

// Membaca kredensial aman dari GitHub Secrets
const USERNAME = process.env.SAP_USERNAME;
const PASSWORD = process.env.SAP_PASSWORD;

const authHeader = 'Basic ' + Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');

async function getSapData() {
    try {
        const response = await axios.get(`${SAP_URL}CustomerSet`, {
            headers: {
                'Authorization': authHeader,
                'Accept': 'application/json'
            }
        });
        console.log("Koneksi Sukses! Data dari SAP:", response.data.d.results);
    } catch (error) {
        console.error("Koneksi Gagal:", error.message);
        process.exit(1); // Memberitahu GitHub bahwa alur kerja gagal jika terjadi eror
    }
}

getSapData();
