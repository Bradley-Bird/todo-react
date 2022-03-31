import { checkError, client } from './client';

export async function getTodos() {
  const resp = await client.from('todos').select();
  return checkError(resp);
}

export async function updateTodos(todo) {
  const resp = await client.from('todos').insert({ todo: todo });
  return checkError(resp);
}

export async function updateStatus(id) {
  const tf = await client.from('todos').select('complete').match({ id }).single();

  if (tf.data.complete === false) {
    const resp = await client.from('todos').update({ complete: true }).match({ id });
    return checkError(resp);
  } else {
    const resp = await client.from('todos').update({ complete: false }).match({ id });
    return checkError(resp);
  }
}
