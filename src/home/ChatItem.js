import Component from '../Component.js';
import { userChatRef } from '../services/firebase.js';

class ChatItem extends Component {
    render() {
        const dom = this.renderDOM();
        const removeButton = dom.querySelector('#remove-button');
        const chatRoom = this.props.chatRoom;
        const userChatRefs = userChatRef.child(chatRoom.key);

        removeButton.addEventListener('click', () => {
            userChatRefs.remove();
        });

        return dom;
    }

    renderTemplate() {
        const chatRoom = this.props.chatRoom;
        return /*html*/`
            <li class="movie-item">
                <span>
                    <p>${chatRoom.title}</p>
                    <button id="chat-link"><a href="./chat.html?key=${chatRoom.key}">Go to CHATROOM!</a></button>
                    <button id="remove-button">ⓧ</button>
                </span>
            </li>
        `;
    }
}
export default ChatItem;