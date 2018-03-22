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

        lists.forEach(function(list) {
            list.addEventListener("click", function (event) {
                _this.toggle(this);
            })
        });
    }
};