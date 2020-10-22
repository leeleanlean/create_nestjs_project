export default {
  // Port
  SERVER_PORT: 3000,

  // Auth SECRET
  AUTH_SECRET: 'xxxxxxxxxx',
  AUTH_TOKEN: 'token',
  AUTH_EXPIRES: `${1 * 24 * 60 * 60}s`,

  // Static
  STATIC_FOLDER: '../public',
  STATIC_MAX_AGE: '1d',
  STATIC_EXTENSIONS: [],

  // Datebase
  DATABASE_HOST: 'localhost',
  DATABASE_PORT: 3306,
  DATABASE_USERNAME: 'root',
  DATABASE_PASSWORD: 'root',
  DATABASE_DATABASE: 'nest',
  DATABASE_ENTITIES: [__dirname + '/./**/*.entity{.ts,.js}'],
  DATABASE_SYNCHRONIZE: true
}
