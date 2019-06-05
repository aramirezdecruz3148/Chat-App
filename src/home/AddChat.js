import Component from '../Component.js';

class AddChat extends Component {
    renderTemplate() {
        return /*html*/`
            <form id="chat-form">
                <label>Add a Chat Room to List:<input name="chat"></label>
                <button>Add</button>
            </form>
        `;
    }
}
export default AddChat;