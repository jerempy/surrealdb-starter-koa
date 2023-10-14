import Surreal from 'surrealdb.js';

export const db = new Surreal();

const config = {
    host: process.env.SURREAL_HOST || 'http://127.0.0.1',
    port: process.env.SURREAL_PORT || '8000',
    user: process.env.SURREAL_USER || 'root',
    password: process.env.SURREAL_PASSWORD || 'root',
    namespace: process.env.SURREAL_NAMESPACE || 'starter',
    database: process.env.SURREAL_DATABASE || 'events',
};

export const surrealInit = () => {
    try {
        db.connect(`${config.host}:${config.port}/rpc`);
        db.signin({
            user: config.user,
            pass: config.password,
        });

        db.use({ ns: config.namespace, db: config.database });
    } catch (e) {
        console.error('ERROR connecting surrealdb', e);
    }
};
