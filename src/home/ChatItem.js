import Component from '../Component.js';
import { auth, userChatRef } from '../services/firebase.js';

class ChatItem extends Component {
    render() {
        const dom = this.renderDOM();
        const removeButton = dom.querySelector('#remove-button');
        const chatRoom = this.props.chatRoom;
        const userChatRefs = userChatRef.child(chatRoom.key);

        function addDeleteMessage() {
            const element = dom.querySelector('#remove-button');
            element.classList.add('message');
        }

        removeButton.addEventListener('click', () => {
            if(auth.currentUser.uid === chatRoom.owner) {
                userChatRefs.remove();
            } else {
                addDeleteMessage();
            }
        });

        return dom;
    }

    renderTemplate() {
        const chatRoom = this.props.chatRoom;
        return /*html*/`
            <li class="chat-item">
                <span>
                    <p>${chatRoom.title}</p>
                    <section>
                        <button id="chat-link"><a href="./chat.html?key=${chatRoom.key}">Go to CHATROOM!</a></button>
                        <button id="remove-button">X</button>
                    </section>
                </span>
            </li>
        `;
    }
}
export default ChatItem;