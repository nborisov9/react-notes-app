import React, { useEffect } from 'react';

import { Form } from '../components/Form';
import { Notes } from '../components/Notes';
import { Loader } from '../components/Loader';
import { Alert } from '../components/Alert';
import { useFirebaseContext } from '../context/firebase/firebaseContext';
import { useAlertContext } from '../context/alert/alertContext';

export const Home = () => {
  const { notes, loading, fetchNotes, removeNote } = useFirebaseContext();
  const { show } = useAlertContext();

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  const onRemoveNote = (id) => {
    removeNote(id);
    setTimeout(() => show('Заметка была удалена', 'warning'), 400);
  };

  return (
    <React.Fragment>
      <Alert />
      <Form />
      {loading && <Loader />}
      <Notes onRemoveNote={onRemoveNote} notes={notes} />
    </React.Fragment>
  );
};
