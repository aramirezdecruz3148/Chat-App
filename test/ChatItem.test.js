import ChatItem from '../src/home/ChatItem.js';
// import { userChatRef } from '../src/services/firebase.js';

const test = QUnit.test;

QUnit.module('ChatItem rendering');

test('test to render correct ChatItem', assert => {
    //arrange
    const chatRoom = {
        key: '-LgdLcaRP5flhWzig5d8',
        title: 'Test'
    };
    const chatItem = new ChatItem({ chatRoom });
    const expected = /*html*/`
            <li class="chat-item">
                <span>
                    <p>${chatRoom.title}</p>
                    <button id="chat-link"><a href="./chat.html?key=${chatRoom.key}">Go to CHATROOM!</a></button>
                    <button id="remove-button">X</button>
                </span>
            </li>
        `;
    //act
    const rendered = chatItem.renderTemplate();
    //assert
    assert.deepEqual(rendered, expected);
});

