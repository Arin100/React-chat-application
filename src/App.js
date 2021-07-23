import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css'

const App = () =>  {
    if(!localStorage.getItem('username')) return <LoginForm />
   
    return (
        <ChatEngine
            height = "100vh"
            projectID = "4232854c-effe-42a0-bbfc-69ec1c411017"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;