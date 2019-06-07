import Component from '../Component.js';

class MessageItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        const date = new Date(message.date);

        return /*html*/`
            <li class="message-item">
                <div class="span-content">
                    <img src="${message.photoURL}">
                    <span><h4>${message.displayName} :</h4></span>
                    <h4 id="message">${message.message}</h4>
                </div>
                <p>Posted on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}</p>
            </li>
        `;
    }
}
export default MessageItem;