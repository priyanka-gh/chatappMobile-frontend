import React,{useState,useEffect,useRef} from 'react'
import Bar from '../Bar/Bar';
import Type from '../Type/Type';
import './chatArea.css'
import Messages from '../Messages/Messages'
import queryString from 'query-string'
import io from 'socket.io-client'
let socket;
const ENDPOINT='https://mobilechatapp-backend.herokuapp.com';
const ChatArea = ({location}) => {
    const messagesperm=['abc','def','ghi','jkl','mno','pqr','stu','vwx','yz','my','name','is','priyanka','ghansela','lmao','hhehe','hi','PAYAL','abc'];

    const[name,setName]=useState('');
    const[room,setRoom]=useState('');
    const[message,setMessage]=useState('');
    const[messages,setMessages]=useState([]);
    const [users, setUsers] = useState('');

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "auto" })
    }

    useEffect(scrollToBottom, [messages]);

    useEffect(()=>{
        const {name,room}=queryString.parse(location.search);
        
        socket = io(ENDPOINT, {
            withCredentials: true,
            transports: ['websocket', 'polling', 'flashsocket']
    });

    setName(name);
    setRoom(room);

    socket.emit('join',{name,room},(error)=>{
        if(error) {
            alert(error);
        }
    })
    },[ENDPOINT,location.search])

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message])
        })

        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });

        socket.on("prev-messages",prevMessages=>{
             setMessages(prevMessages);
        })
    },[messages])

    const sendMessage=(event)=>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }


    return (
        <div className="chatArea">
            <Bar room={room}/>
            <div className="chats">
                <Messages messages={messages} name={name}/>
            </div>
            <Type message={message} setMessage={setMessage} sendMessage={sendMessage} />                     
            <div ref={messagesEndRef} />
        </div>
    )
}

export default ChatArea
