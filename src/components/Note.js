import { MdDelete, MdFileUpload }  from "react-icons/md";

const Note = ({ id, text, file, filename, date, handleDeleteNote }) => {
    return(
        <div className='note'>
           <span>{text}</span>
          { file && <><MdFileUpload /><div>{filename}</div></>}
           <div className='note-footer'>
               <small>{date}</small>
               <MdDelete
                onClick={()=> handleDeleteNote(id)}
                 className='delete-icon'
                  size='1.3em' />
           </div>
        </div>
    );
};

export default Note;