import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddChat from './AddChat.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'Get Ready to CHAT!' });
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addChat = new AddChat();
        main.appendChild(addChat.render());

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

export default App;