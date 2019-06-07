import Component from '../Component.js';

class MessageItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        return /*html*/`
            <li>${message.title}</li>
        `;
    }
}
export default MessageItem;