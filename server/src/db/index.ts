import * as schema from './schema.js'
import { drizzle } from 'drizzle-orm/sql-js'
import { sql } from 'drizzle-orm'
import type { Database as SqlJsDatabase } from 'sql.js'
import { readFile } from 'fs/promises'
import { join } from 'path'

const DB_PATH = join(process.cwd(), 'ai-comic.db')

let _db: ReturnType<typeof drizzle<typeof schema>> | null = null

export function getDb() {
  if (!_db) throw new Error('Database not initialized. Call initDb() first.')
  return _db
}

export async function initDb() {
  const initSqlJs = (await import('sql.js')).default
  const SQL = await initSqlJs()
  let sqlDb: SqlJsDatabase
  try {
    const buf = await readFile(DB_PATH)
    sqlDb = new SQL.Database(new Uint8Array(buf))
  } catch {
    sqlDb = new SQL.Database()
  }
  _db = drizzle(sqlDb, { schema })
  return _db
}

export async function testConnection() {
  try {
    getDb().run(sql`SELECT 1`)
    return true
  } catch {
    return false
  }
}
