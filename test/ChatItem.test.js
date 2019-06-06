import ChatItem from '../src/home/ChatItem.js';

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
                    <p>Test</p>
                    <section>
                        <button id="chat-link"><a href="./chat.html?key=-LgdLcaRP5flhWzig5d8">Go to CHATROOM!</a></button>
                        <button id="remove-button">X</button>
                    </section>
                </span>
            </li>
        `;
    //act
    const rendered = chatItem.renderTemplate();
    //assert
    assert.htmlEqual(rendered, expected);
});

