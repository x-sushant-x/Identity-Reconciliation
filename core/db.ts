import postgres from "postgres";

const postgresConn = postgres(process.env.DATABASE_URL!, {
    ssl: 'require'
});

export default postgresConn