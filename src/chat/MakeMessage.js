import Component from '../Component.js';

class MakeMessage extends Component {
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