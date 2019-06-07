import Component from '../Component.js';
import ChatItem from '../home/ChatItem.js';

class ChatList extends Component {
    render() {
        const dom = this.renderDOM();
        const chatRooms = this.props.chatRooms;

        chatRooms.forEach(chatRoom => {
            const chatItem = new ChatItem({ chatRoom: chatRoom });
            dom.appendChild(chatItem.render());
        });

        dom.scrollTop = dom.scrollHeight;
        
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="chat-list"></ul>
        `;
    }
}
export default ChatList;