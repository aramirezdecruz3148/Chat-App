import Component from '../Component.js';

class MakeMessage extends Component {
    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', event => {
            event.preventDefault();
            
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