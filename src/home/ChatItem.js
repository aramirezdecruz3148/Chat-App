import Component from '../Component.js';

class ChatItem extends Component {
    renderTemplate() {
        return /*html*/`
            <li class="movie-item">
                <span>
                    <p></p>
                    <button>ⓧ</button>
                </span>
            </li>
        `;
    }
}
export default ChatItem;