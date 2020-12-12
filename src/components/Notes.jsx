import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Notes = ({ notes, onRemoveNote }) => {
  return (
    <TransitionGroup component="ul" className="note-list">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames={'note'} timeout={800}>
          <li className="note-list__item">
            <div className="note-list__info">
              <strong>{note.title}</strong>
              <small>{note.date}</small>
            </div>
            <button onClick={() => onRemoveNote(note.id)} className="btn btn-danger">
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
