// import React from 'react'
// import './Type.css'
// import InputAdornment from '@material-ui/core/InputAdornment';
// import TextField from '@material-ui/core/TextField';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import { Avatar, IconButton } from "@material-ui/core";
// import SendIcon from '@material-ui/icons/Send';
// const Type = ({ setMessage, sendMessage, message }) => {
//     return (
//         <div className="footer">
//             <div className="typeArea">
//                  <TextField  style={{ minWidth: '85vw' }}
//                     className="textF"
//                     placeholder="Type a message..."
//                     value={message}
//                     onChange={({ target: { value } }) => setMessage(value)}
//                     onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
//                     InputProps={{
//                         startAdornment: (
//                             <InputAdornment position="start">
//                                 <InsertEmoticonIcon className="smiley" />
//                             </InputAdornment>
//                         ),
//                     }}
//                 />     
//             </div>
//             <div className="sendBtn">
//                 <SendIcon className="iconSend" onClick={e => sendMessage(e)}/>
//             </div>
//         </div>
//     )
// }

// export default Type

import React from 'react'
import './Type.css'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar, IconButton } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
const Type = ({ setMessage, sendMessage, message }) => {
    return (
        <div className="footer">
            <div className="typeArea">
            <TextField 
                    className="textF"
                    placeholder="Type a message..."
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <InsertEmoticonIcon className="smiley" />
                            </InputAdornment>
                        ),
                    }}
                />      
            </div>
            <div className="sendBtn">
                <SendIcon className="iconSend" onClick={e => sendMessage(e)}/>
            </div>
        </div>
    )
}

export default Type