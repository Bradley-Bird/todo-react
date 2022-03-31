import { checkError, client } from './client';

export async function getTodos() {
  const resp = await client.from('todos').select();
  return checkError(resp);
}
