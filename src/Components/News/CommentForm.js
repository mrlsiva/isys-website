import React, { useState } from 'react'

const CommentForm = () => {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');


    const onChangeHandler = (e) => {
        setComment(e.target.value);
        setName(e.target.value);
        setEmail(e.target.value);
        setWebsite(e.target.value);
    }

  return (
    <form action="#" className="comment-form">
        <div className="single-form-input">
            <textarea value={comment} onChange={onChangeHandler} placeholder="Type your comments...."></textarea>
        </div>
        <div className="single-form-input">
            <input value={name} type="text" onChange={onChangeHandler} placeholder="Type your name...."/>
        </div>
        <div className="single-form-input">
            <input value={email} type="email" onChange={onChangeHandler} placeholder="Type your email...."/>
        </div>
        <div className="single-form-input">
            <input value={website} type="text" onChange={onChangeHandler} placeholder="Type your website...."/>
        </div>
        <button onSubmit={(e) => e.preventDefault()} className="submit-btn" type="submit"><i className="fal fa-comments"></i>Post Comment</button>
    </form>
  )
}

export default CommentForm