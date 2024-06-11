import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";

export const thanos = async () => {
        const editArrayContacts = [];
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const storageContacts = JSON.parse(data);
        storageContacts.map((contact, index) => {
            if (index % 2 !== 0) {
                editArrayContacts.push(contact);
            }
        });
       await fs.writeFile(PATH_DB, JSON.stringify(editArrayContacts))   ;
       
    } catch (error) {
        console.error("somthing went wrong", error);
    }    
};

await thanos();