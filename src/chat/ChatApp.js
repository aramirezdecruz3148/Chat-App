import Component from '../Component.js';
import Header from '../shared/Header.js';
import HomeButton from './HomeButton.js';
import MakeMessage from './MakeMessage.js';
import QUERY from '../QUERY.js';
import { userChatRef, messageRoomRef } from '../services/firebase.js';
import MessageList from './MessageList.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        const header = new Header();
        dom.insertBefore(header.render(), main);

        const homeButton = new HomeButton();
        main.appendChild(homeButton.render());
        
        
        const searchParams = QUERY.parse(window.location.search.slice(1));
        const roomMessagesRef = messageRoomRef.child(searchParams.key);

        const userChatRefs = userChatRef.child(searchParams.key);
        
        const makeMessage = new MakeMessage({
            roomMessagesRef,
            key: searchParams.key
        });
        main.appendChild(makeMessage.render());
        
        const messageList = new MessageList({ messages: [] });
        main.appendChild(messageList.render());  
        
        roomMessagesRef.on('value', snapshot => {
            const value = snapshot.val();
            const messages = value ? Object.values(value) : [];
            messageList.update({ messages: messages });
        });
        
        userChatRefs.on('value', snapshot => {
            const value = snapshot.val();
            header.update({ title: value.title });
        });
        
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}
export default ChatApp;