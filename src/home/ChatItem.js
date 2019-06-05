import Component from '../Component.js';

class ChatItem extends Component {
    render() {
        const dom = this.renderDOM();
        const onRemove = this.props.onRemove;
        const chat = this.props.chat;
        const removeButton = dom.querySelector('button');

        removeButton.addEventListener('click', () => {
            onRemove(chat);
        });

        return dom;
    }

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