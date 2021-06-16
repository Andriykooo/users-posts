import React from 'react';

export const ModalAddPost = ({ modalActive, setModalActive }: any) => (
  <div
    className="modal"
    onClick={() => setModalActive(false)}
  >
    <div
      className="modal__content"
      onClick={(event) => event.stopPropagation()}
    >
      asd
    </div>
  </div>
);
