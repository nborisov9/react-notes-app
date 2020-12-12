import React, { useState } from 'react';

import { useFirebaseContext } from '../context/firebase/firebaseContext';
import { useAlertContext } from '../context/alert/alertContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const { show } = useAlertContext();
  const firebase = useFirebaseContext();

  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      if (value.length <= 120) {
        firebase
          .addNote(value.trim())
          .then(() => show('Заметка была создана', 'success'))
          .catch(() => show('Что-то пошло не так', 'danger'));
        setValue('');
      } else {
        show('Вы ввели слишком длинный текст', 'danger');
        setTimeout(() => setValue(''), 3000);
      }
    } else {
      show('Введите название заметки', 'warning');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-container">
        <input
          type="text"
          className="form-input"
          placeholder="Введите название заметки"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </form>
  );
};
