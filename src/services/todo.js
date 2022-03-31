import { checkError, client } from './client';

export async function getTodos() {
  const resp = await client.from('todos').select();
  return checkError(resp);
}

export async function updateTodos(todo) {
  const resp = await client.from('todos').insert(todo);
  return checkError(resp);
}
