import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddChat from './AddChat.js';
import ChatList from './ChatList.js';
import { userChatRef } from '../services/firebase.js';


class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'Get Ready to CHAT!' });
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addChat = new AddChat();
        main.appendChild(addChat.render());

        userChatRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const chatRooms = value ? Object.values(value) : [];
                chatList.update({ chatRooms });
            });


        const chatList = new ChatList({ chatRooms: [] });
        main.appendChild(chatList.render());

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

export default App;