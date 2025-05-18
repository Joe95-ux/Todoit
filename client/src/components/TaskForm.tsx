import React, { useState } from 'react';

type TaskFormType = {
  onAdd: (title:string)=> void,
}

export default function TaskForm({ onAdd }: TaskFormType) {
  const [title, setTitle] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New Task" />
      <button type="submit">Add</button>
    </form>
  );
}
