import Component from '../Component.js';

class ChatItem extends Component {
    renderTemplate() {
        const chat = this.props.chat;
        return /*html*/`
            <li class="movie-item">
                <span>
                    <p>${chat.title}</p>
                    <button>ⓧ</button>
                </span>
            </li>
        `;
    }
}
export default ChatItem;