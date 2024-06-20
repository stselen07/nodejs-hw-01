import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileData);

    if (contacts.length >= 1) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();