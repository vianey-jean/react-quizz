import React from 'react'
import { useGlobalContext } from '../data/data'

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext()
  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <h2>Congrats!</h2>
        <p className='reponseModale'>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          Questions Correctly
        </p>
        <button className='close-btn' onClick={closeModal}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default Modal
