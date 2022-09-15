var midihub = {
    mapping: mapp = new Map(),
    
    addMapping: function (ccvalue, callback){
        this.mapping.set(ccvalue, callback);
    },

    newMessage: function (message){
        if (this.mapping.has(message[1])){
            this.mapping.get(message[1])(message[2]);
        };
        console.log(`cc:${message[1]} value:${message[2]}`);
    },
    set: function (ccarray){
        this.arr = ccarray;
    },
    array: function(){
        return this.arr;
    },
};
module.exports = midihub;
