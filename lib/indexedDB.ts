// lib/indexedDB.ts
import { DBSchema, IDBPDatabase, openDB } from "npm:idb";

const DB_NAME = "AchordeLocalDB";
const DB_VERSION = 1;
const STORE_NAME = "tabs";

interface MyDB extends DBSchema {
	[STORE_NAME]: {
		key: string;
		value: any;
	};
}

export const initDB = async (): Promise<IDBPDatabase<MyDB>> => {
	return openDB<MyDB>(DB_NAME, DB_VERSION, {
		upgrade(db) {
			db.createObjectStore(STORE_NAME, { keyPath: "id" });
		},
	});
};

export const addData = async <T extends { id: string }>(
	data: T,
): Promise<string> => {
	const db = await initDB();
	return db.add(STORE_NAME, data);
};

export const getData = async <T>(id: string): Promise<T | undefined> => {
	const db = await initDB();
	return db.get(STORE_NAME, id);
};

export const getAllData = async <T>(): Promise<T[]> => {
	const db = await initDB();
	return db.getAll(STORE_NAME);
};

export const updateData = async <T extends { id: string }>(
	data: T,
): Promise<string> => {
	const db = await initDB();
	return db.put(STORE_NAME, data);
};

export const deleteData = async (id: string): Promise<void> => {
	const db = await initDB();
	return db.delete(STORE_NAME, id);
};

export const clearData = async (): Promise<void> => {
	const db = await initDB();
	return db.clear(STORE_NAME);
};
