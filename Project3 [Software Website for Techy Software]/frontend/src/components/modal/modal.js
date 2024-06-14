import React,{useState} from 'react';
import '../modal/modal.css'
import axios from 'axios';

const Modal = ({ show, handleClose }) => {
    const [feedback,setFeedback] = useState({
        name:"",
        review:"",
    });

    const handleChangeFeedback=(e)=>{
        const {name,value} =e.target
        setFeedback({
            ...feedback,
            [name]:value
        });
    };

    const handleSubmitFeedback=(e)=>{
        e.preventDefault(); 
        
        axios.post('http://localhost:8000/feedback',feedback)
        .then(res=>{
            alert("Thank You for your feedback!")
            window.location.reload();  
        })
        .catch(err=>console.log("error"))
      
  }
  return (
    <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header header">
                    <h5 className="title">Give Us Your Valuable Review</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                </div>
                <form className='modal-form' onSubmit={handleSubmitFeedback}>
                    <input type="text" placeholder="YOUR NAME" className="modal-name" name='name' value={feedback.name} onChange={handleChangeFeedback}></input>
                    <input type="text" placeholder="FEEDBACK" className="modal-input" name='review' value={feedback.review} onChange={handleChangeFeedback}></input>
                    <button type="submit" className="modal-btn">Give FeedBack</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Modal;