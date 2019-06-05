import Component from '../Component.js';
import { auth, userChatRef } from '../services/firebase.js';

class AddChat extends Component {
    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', event => {
            event.preventDefault();

            const userChatRefs = userChatRef.push();

            const formInput = form.querySelector('input[name=chat]');

            const room = {
                key: userChatRefs.key,
                owner: auth.currentUser.uid,
                title: formInput.value
            };

            userChatRefs.set(room).then(() => {
                form.reset();
            });

        });

        return form;
    }

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