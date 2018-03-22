module.exports = {
    toggle: function (element) {
        element.classList.toggle("toggled");
    },
    init: function () {
        const lists = document.querySelectorAll(".streets");
        const _this = this;

        lists.forEach(function(list) {
            list.addEventListener("click", function (event) {
                _this.toggle(this);
            })
        });
    }
};