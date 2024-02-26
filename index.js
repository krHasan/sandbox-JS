$(document).ready(function () {
    $('#menuContainer').load('menu.html');

    (function () {
        var elements = document.querySelectorAll("code");

        elements.forEach(function (element) {
            var text = element.textContent;

            // #045694 dark blue
            text = text.replace(new RegExp("\\bfunction\\b", "gi"), '<span style="color: #045694; font-weight: bold">$&</span>');

            // #015493 light blue
            let lightBlueArray = ['return', 'if', 'else', 'const', 'let', 'var', 'while', 'new', 'async',
                'try', 'await', 'catch', 'success', 'data', 'type', 'dataType', 'name', 'id', 'document', 'undefined',
                'null', 'class'];
            lightBlueArray.forEach(element => {
                text = text.replace(new RegExp("\\b" + element + "\\b", "gi"), '<span style="color: #015493">$&</span>');
            });

            // #C16D27 orange
            let orangeArray = ['false', 'true', 'require', 'Promise', 'setTimeout', 'resolve', 'get', 'JSON',
                'stringify', 'log', 'ajax', 'then', 'XMLHttpRequest', 'done', 'catch', 'toLocaleString',
                'fail', 'val', 'serialize', 'reload', 'jqXHR', 'errorThrown', 'slice', 'this', 'prop',
                'attr', 'removeAttr', 'change', 'ready', 'blur', 'toFixed', 'parseFloat', 'inputFilter', 'test'];
            orangeArray.forEach(element => {
                text = text.replace(new RegExp("\\b" + element + "\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            })

            // #648522 light green
            let greenArray = ['console'];
            greenArray.forEach(element => {
                text = text.replace(new RegExp("\\b" + element + "\\b", "gi"), '<span style="color: #648522">$&</span>');
            });
            var regex = /(['])(?:(?=(\\?))\2.)*?\1/g;
            text = text.replace(regex, '<span style="color: #648522">$&</span>');

            element.innerHTML = text;
        });
    })();
})