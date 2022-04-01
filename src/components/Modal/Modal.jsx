import { useRef } from 'react';
import { ACTION_TYPES } from '../../state/state';
import useClickOutside from '../../hooks/useClickOutside';


function Modal({dispatch, deleteId}) {

    const ref = useRef(null);
    
    useClickOutside(ref, () => dispatch({ type: ACTION_TYPES.HIDE_MODAL }));

    const confirmDelete = () => {
        dispatch({ type: ACTION_TYPES.DELETE_TASK, deleteId: deleteId });
    }

    const cancelDelete = () => {
        dispatch({ type: ACTION_TYPES.HIDE_MODAL });
    }
    
    return (
        <div className="portal">
            <div ref={ref} className="modal">
                <div className="modalContent">
                    <p>Are you sure you want to delete?</p>
                    <div>
                        <span className="yes" onClick={confirmDelete}>Yes</span>
                        <span className="no" onClick={cancelDelete}>No</span> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;