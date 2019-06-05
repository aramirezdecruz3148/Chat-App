import ChatItem from '../src/home/ChatItem.js';

const test = QUnit.test;

QUnit.module('ChatItem rendering');

test('test to render correct ChatItem', assert => {
    //arrange
    const chat = {
        key: '-LgdLcaRP5flhWzig5d8',
        title: 'Test'
    };
    const chatItem = new ChatItem({ chat });
    const expected = /*html*/`
            <li class="movie-item">
                <span>
                    <p>${chat.title}</p>
                    <button id="chat-link"><a href="./chat.html?key=${chat.key}">Go to CHATROOM!</a></button>
                    <button id="remove-button">ⓧ</button>
                </span>
            </li>
        `;
    //act
    const rendered = chatItem.renderTemplate();
    //assert
    assert.deepEqual(rendered, expected);
});

