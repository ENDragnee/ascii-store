// scripts/hashPassword
import bcrypt from 'bcrypt';
import { argv } from 'process';

export async function hashPassword(password:string): Promise<string> {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
}

async function main() {
  // const password = 'qazwsxedc'; // Replace with any password
  const password = argv[2];
  if (!password) {
    console.error('Please provide a password as a command-line argument.');
    process.exit(1);
  }

  try {
    const hashed = await hashPassword(password);
    console.log('Hashed password:', hashed);
  }
  catch (error) {
    console.error('Error hashing password:', error);
    process.exit(1);
  }
}

main();
