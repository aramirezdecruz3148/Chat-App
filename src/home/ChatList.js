import Component from '../Component.js';
import ChatItem from '../home/ChatItem.js';

class ChatList extends Component {
    render() {
        const dom = this.renderDOM();
        // const onRemove = this.props.onRemove;

        // ?.forEach(chat => {
        //     const chatItem = new ChatItem({ chat, onRemove });
        //     dom.appendChild(chatItem.render());
        // });
        const chats = this.props.chats;

        chats.forEach(chat => {
            const chatItem = new ChatItem({ chat });
            dom.appendChild(chatItem.render());
        });


        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="chat-list"></ul>
        `;
    }
}
export default ChatList;