import { app } from '../src/services/firebase.js'; 
import './html-equal.js';
// import utilities and custom assertions
import './Profile.test.js';
import './ChatItem.test.js';

QUnit.done(() => {
    app.delete();
}); 