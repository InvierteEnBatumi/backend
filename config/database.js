const path = require('path');

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
        ca: fs.readFileSync(`./config/ca-certificate.crt`).toString(),
      },
},
    useNullAsDefault: true,
  },
});
