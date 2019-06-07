import Component from '../Component.js';

class MessageItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        return /*html*/`
            <li>
                <span>
                    <img src="${message.photoURL}">
                    <h4>${message.displayName}</h4>
                    <h4>${message.message}</h4>
                    <p>${message.date}</p>
                </span>
            </li>
        `;
    }
}
export default MessageItem;