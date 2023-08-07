import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = '1h1yoCZfbFKLWqvxsqbCwGkJtKIbak6vEXqJnK_7vYDI';

async function getCasosData() {
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  // Lee el archivo JSON con las credenciales descargadas desde la Consola de Desarrolladores de Google
  const credentials = require('./components/data/pr/charged-thought-395023-37f82d09d57a.json');

  // Autentica con las credenciales
  await doc.useServiceAccountAuth(credentials);

  // Carga la información del archivo de la hoja de cálculo
  await doc.loadInfo();

  // Obtiene la hoja de cálculo que desees (por ejemplo, la primera hoja)
  const sheet = doc.sheetsByIndex[0];

  // Lee los datos de la hoja de cálculo
  const rows = await sheet.getRows();

  // Aquí puedes procesar los datos y devolverlos como desees
  // Por ejemplo, podrías devolver un array de objetos con los datos de cada fila
  const casosData = rows.map((row) => ({
    ID: row.A, // Columna A
    Coordenadas: [row.E, row.F], // Columnas E y F
    "Título del hecho": row.B, // Columna B
    Fecha: row.C, // Columna C
    Fuente: row.D, // Columna D
  }));

  return casosData;
}

export default getCasosData;
