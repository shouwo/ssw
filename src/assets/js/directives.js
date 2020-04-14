import Vue from 'Vue';
Vue.directive('tableDrag', {
    inserted: function(el) {
        el = el.getElementsByClassName('el-table__body-wrapper')[0];
        el.style.cursor = 'grab';
        el.onmousedown = function() {
            let gapX = event.clientX;
            let startX = el.scrollLeft;
            document.onmousemove = function(e) {
                let x = e.clientX - gapX;
                el.scrollLeft = startX - x;
                return false;
            };
            document.onmouseup = function() {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    }
});

