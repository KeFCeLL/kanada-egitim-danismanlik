import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NILEDB_URL;

if (!connectionString) {
  throw new Error('Veritabanı bağlantı URL\'si ayarlanmamış. Lütfen DATABASE_URL, POSTGRES_URL veya NILEDB_URL ortam değişkenini ayarlayın.');
}

// NileDB için özel bağlantı ayarları
const client = postgres(connectionString, {
  ssl: {
    rejectUnauthorized: false
  },
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
  prepare: false,
  transform: {
    undefined: null
  }
});

export const db = drizzle(client, { schema });

// Bağlantıyı test et
async function testConnection() {
  try {
    await client`SELECT 1`;
    console.log('Veritabanı bağlantısı başarılı');
  } catch (error) {
    console.error('Veritabanı bağlantısı başarısız:', error);
    throw error;
  }
}

// Uygulama başlangıcında bağlantıyı test et
if (process.env.NODE_ENV !== 'test') {
  testConnection().catch(console.error);
} 