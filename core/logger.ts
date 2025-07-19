const levels = {
    info: '\x1b[36m%s\x1b[0m',     // Cyan
    warn: '\x1b[33m%s\x1b[0m',     // Yellow
    error: '\x1b[31m%s\x1b[0m',    // Red
    success: '\x1b[32m%s\x1b[0m',  // Green
};

const getTime = () => {
    return new Date().toISOString();
};

const log = {
    info: (message: string) => {
        console.log(levels.info, `[INFO] ${getTime()} - ${message}`);
    },
    warn: (message: string) => {
        console.warn(levels.warn, `[WARN] ${getTime()} - ${message}`);
    },
    error: (message: string) => {
        console.error(levels.error, `[ERROR] ${getTime()} - ${message}`);
    },
    success: (message: string) => {
        console.log(levels.success, `[SUCCESS] ${getTime()} - ${message}`);
    },
};

export default log;
