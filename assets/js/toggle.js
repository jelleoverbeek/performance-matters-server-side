module.exports = {
    toggle: function (element) {
        // Test if classList API is supported
        var classListAvailable = ("classList" in document.documentElement);

        if(classListAvailable) {
            element.classList.toggle("toggled");
        } else {
            // If classlist is not available use the className function
            if(element.className.indexOf(" toggled") > 0) {
                element.className = element.className.replace(" toggled", "");
            } else {
                element.className += " toggled";
            }
        }
    },
    init: function () {
        var lists = document.querySelectorAll(".streets");
        var _this = this;

        for (var i = 0; i < lists.length; i++) {
            lists[i].addEventListener("click", function () {
                _this.toggle(this);
            })
        }
    }
};