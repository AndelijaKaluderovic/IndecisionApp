import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleHideModal}
        //onRequest for closing when we click in the background
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleHideModal}>Okay</button>
    </Modal>
)

export default OptionModal