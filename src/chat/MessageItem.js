import Component from '../Component.js';

class MessageItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        return /*html*/`
            <li class="message-item">
                <span class="span-content">
                    <img src="${message.photoURL}">
                    <h4>${message.displayName}</h4>
                    <h4>${message.message}</h4>
                </span>
                    <p>${message.date}</p>
            </li>
        `;
    }
}
export default MessageItem;