import Component from '../Component.js';

class ChatItem extends Component {
    render() {
        const dom = this.renderDOM();
        const onRemove = this.props.onRemove;
        const removeButton = dom.querySelector('button');

        removeButton.addEventListener('click', () => {
            onRemove();
        });

        return dom;
    }

    renderTemplate() {
        const chat = this.props.chat;
        return /*html*/`
            <li class="movie-item">
                <span>
                    <p>${chat.title}</p>
                    <button id="chat-link"><a href="./chat.html?key=${chat.key}">Go to CHATROOM!</a></button>
                    <button id="remove-button">ⓧ</button>
                </span>
            </li>
        `;
    }
}
export default ChatItem;