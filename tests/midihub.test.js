const hub = require('../midihub.js');

test('check bindin callback', () => {
    const val = 55;
    const cc = 1;
    function callback(val){
        expect(val).toBe(val);
    }
    hub.addMapping(1, callback);

    hub.newMessage(cc, val);
});