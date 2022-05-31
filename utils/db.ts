import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'announcementdb',
    namedPlaceholders: true,
    decimalNumbers: true
})