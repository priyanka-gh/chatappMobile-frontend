import React from 'react'
import './Bar.css'
import CallIcon from '@material-ui/icons/Call';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const Bar = ({room}) => {
    return (
        <div className="Bar">
            <div className="profilePic">
                <img className="barImg" src="images/logo192.png"></img>
            </div>
            <div className="contact">
                <h3>{room}</h3>
                <span>Online</span>
            </div>
            <div className="barIcons">
                <CallIcon className="icon"/>
                <AttachFileIcon className="icon iconattach"/>
                <MoreVertIcon className="icon"/>
            </div>
        </div>
    )
}

export default Bar
