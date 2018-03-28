var toggle = require('./toggle')

var app = {
    init: function () {

        if (!navigator.onLine) {
            document.body.insertAdjacentHTML("afterbegin", '<p class="offline">You appear to be offline, please check your internet connection.</p>')
        }

        toggle.init();
    }
};

app.init();