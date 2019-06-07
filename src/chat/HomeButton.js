import Component from '../Component.js';

class HomeButton extends Component {
    renderTemplate() {
        return /*html*/`
            <section>
                <button id="home-button"><a href="./">Back to Chatroom List</a></button>
            </section>
        `;
    }
}
export default HomeButton;