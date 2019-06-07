import Component from '../Component.js';

class MessageItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        return /*html*/`
            <li class="message-item">
                <div class="span-content">
                    <img src="${message.photoURL}">
                    <span><h4>${message.displayName} :</h4></span>
                    <h4 id="message">${message.message}</h4>
                </div>
                <p>${message.date}</p>
            </li>
        `;
    }
}
export default MessageItem;