const path = require('path');
const fs = require('fs');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'dpg-clkrmncjtl8s73f17epg-a.oregon-postgres.render.com/batumidb',
      port: '5432',
      database: 'batumidb',
      user: 'batumiuser',
      password: 'E0rXLly5eVDZO2YEhuIImrnljhgrLziA',
      ssl: {
        rejectUnauthorized: false // Deshabilitar la verificación del certificado
      },
  },
    useNullAsDefault: true,
  },
});
