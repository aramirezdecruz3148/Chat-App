import Component from '../Component.js';
import Header from '../shared/Header.js';
import HomeButton from './HomeButton.js';
import MakeMessage from './MakeMessage.js';
import QUERY from '../QUERY.js';
import { userChatRef } from '../services/firebase.js';
import MessageList from './MessageList.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        const header = new Header({ title: 'chat Chat CHAT AWAY!' });
        dom.insertBefore(header.render(), main);

        const homeButton = new HomeButton();
        main.appendChild(homeButton.render());

        const searchParams = QUERY.parse(window.location.search.slice(1));
        const userChatRefs = userChatRef.child(searchParams.key);

        const makeMessage = new MakeMessage({ userChatRefs });
        main.appendChild(makeMessage.render());

        const messageList = new MessageList();
        main.appendChild(messageList.render());     

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