import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const existingContacts = JSON.parse(fileContent);

    existingContacts.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(existingContacts));
  } catch (error) {
    console.error(error);
  }
};

addOneContact();