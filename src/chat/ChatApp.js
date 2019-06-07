import Component from '../Component.js';
import Header from '../shared/Header.js';
import HomeButton from './HomeButton.js';
import MakeMessage from './MakeMessage.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        const header = new Header({ title: 'chat Chat CHAT AWAY!' });
        dom.insertBefore(header.render(), main);

        const homeButton = new HomeButton();
        main.appendChild(homeButton.render());

        const makeMessage = new MakeMessage();
        main.appendChild(makeMessage.render());

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