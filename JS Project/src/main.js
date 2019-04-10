window.onload = function () {
    var horizontal_btn = document.getElementById('horizontal_btn');
    var vertical_btn = document.getElementById('vertical_btn');
    var divGen_btn = document.getElementById('divGen_btn');
    var search_box = document.getElementById('search_box');

    horizontal_btn.onclick = function () {
        console.log("button clicked");
    }

    vertical_btn.onclick = function () {

    }

    divGen_btn.onclick = function () {
        var newElement = document.createElement('div');
        newElement.id = 'fooId';
        newElement.class = 'fooClass';
        newElement.innerHTML = '<p>some inner text</p>';
        document.getElementsByTagName('body')[0].appendChild(newElement);
    }

    search_box.onchange = function (e) {
        console.log(e.target.value);
    }

    
};