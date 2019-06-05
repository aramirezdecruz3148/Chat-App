import Component from '../Component.js';

class AddChat extends Component {
    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newChat = {
                title: formData.get('chat')
            };

            onAdd(newChat);

            form.reset();
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