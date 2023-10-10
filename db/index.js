import Surreal from 'surrealdb.js';

export const db = new Surreal();

const config = {
    user: process.env.SURREAL_USER || 'root',
    password: process.env.SURREAL_PASSWORD || 'root',
    namespace: process.env.SURREAL_NAMESPACE || 'starter',
    database: process.env.SURREAL_DATABASE || 'events',
};

export const surrealInit = () => {
    try {
        db.connect('http://127.0.0.1:8000/rpc');
        db.signin({
            user: config.user,
            pass: config.password,
        });

        db.use({ ns: config.namespace, db: config.database });
    } catch (e) {
        console.error('ERROR connecting surrealdb', e);
    }
};
