export const ensureTable = (table, id) => {
    if (!id.startsWith(table)) {
        id = `${table}:${id}`;
    }
    return id;
};
