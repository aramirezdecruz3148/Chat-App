import Component from '../Component.js';

class ChatItem extends Component {
    renderTemplate() {
        const chats = this.props.chats;
        return /*html*/`
            <li class="movie-item">
                <span>
                    <p>${chats.title}</p>
                    <button>ⓧ</button>
                </span>
            </li>
        `;
    }
}
export default ChatItem;