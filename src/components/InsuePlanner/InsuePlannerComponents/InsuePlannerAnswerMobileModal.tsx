import React from 'react';
import Modal from 'react-modal';

interface InsuePlannerAnswerMobileModal {
  element: any;
  openModal: boolean;
  setOpenModal: (arg: boolean) => void;
}

function InsuePlannerAnswerMobileModal({ element, openModal }: InsuePlannerAnswerMobileModal) {
  return (
    <Modal isOpen={openModal} style={customStyles}>
      {element}
    </Modal>
  );
}

const customStyles: any = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(67, 67, 67, 0.5)',
  },
  content: {
    width: '75%',
    height: 'calc(100vh - 40rem)',
    padding: 0,
    // bottom: '20%',
    bottom: '19.6rem',
    left: 'auto',
    right: '0%',
    top: 'auto',
    // borderRadius: '5%',
    borderTopLeftRadius: '32px',
    borderTopRightRadius: '0%',
    borderBottomLeftRadius: '32px',
    borderBottomRightRadius: '0%',
  },
};

export default InsuePlannerAnswerMobileModal;
