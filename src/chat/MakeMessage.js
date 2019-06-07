import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class MakeMessage extends Component {
    render() {
        const form = this.renderDOM();

        const userChatRefs = this.props.userChatRefs;

        const messagesRef = userChatRefs.child('messages');

        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();

            const messages = messagesRef.push();

            const avatar = auth.currentUser.photoURL || './assets/avatar-default.png';

            messages.set({
                owner: auth.currentUser.uid,
                message: input.value,
                displayName: auth.currentUser.displayName,
                photoURL: avatar,
                date: Date()
            });

            form.reset();
            
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
        <form id="make-message">
            <label>Type Message:<input name="chat"></label>
            <button>Chat!</button>
        </form>
        `;
    }
}
export default MakeMessage;