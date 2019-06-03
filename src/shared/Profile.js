import Component from '../Component.js';

class Profile extends Component {
    render() {
        const dom = this.renderDOM();
        const profile = new Profile();
        dom.appendChild(profile.render());

        return dom;
    }

    renderTemplate() {
        const user = this.props.user;
        if(!user) {
            return `<div></div>`;
        }

        const avatar = user.photoURL || './assets/default-avatar.png';

        return /*html*/`
        <div class="profile">
            <img src="${avatar}">
            <span>${user.displayName}</span>
            <button>Sign Out</button>
        </div>
        `;
    }
}

export default Profile;