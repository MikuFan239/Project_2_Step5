// Reference: https://www.youtube.com/watch?v=Jl4q2cccwf0&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=20
// Github: https://github.com/iamshaunjp/Complete-React-Tutorial/tree/lesson-20/dojo-blog/src
import './CommentSection.css';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { BsFillPersonFill } from "react-icons/bs";

const CommentSection = () => {
  const [content, setContent] = useState('');
  const { t } = useTranslation();
  // const [sent, setSent] = useState(false);

  const send = (e) => {
    e.preventDefault();
    const comment = { content };

    fetch('http://localhost:8000/comments/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment)
    }).then(() => {
      console.log('new comment added');
    })
  }

  const afterSend = () => {
    // setSent(true);
    document.getElementById('commentArea').value='';
  }

  return (      
    <div className="commentSection">
      {/* sending section */}
      <BsFillPersonFill className='commentIconStyle1'/>
        
      <form onSubmit={send}>
        <input
          required
          placeholder={t('MM2019.comment-input')}
          id='commentArea'
          onChange={(e) => setContent(e.target.value)}
        ></input>

        <button className="sendComment" onClick={afterSend}>SEND</button>
      </form>
      
      {/* reading section */}
      {/* <div className="readSection">
        <div className="user">
            {sent && (
              <BsFillPersonFill className='commentIconStyle2'/>
            )}
            {sent && (
              <h3>MikuFan</h3>  
            )}
        </div>
        
        {sent && (
          <p>{content}</p>  
          )}
      </div> */}
    </div>
  );
}
 
export default CommentSection;