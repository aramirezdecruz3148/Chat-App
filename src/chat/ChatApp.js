import Component from '../Component.js';
import Header from '../shared/Header.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        const header = new Header({ title: 'chat Chat CHAT AWAY!' });
        dom.insertBefore(header.render(), main);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}
export default ChatApp;