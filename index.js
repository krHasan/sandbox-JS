$(document).ready(function () {
    $('#menuContainer').load('menu.html');

    (function () {
        var elements = document.querySelectorAll("code");

        elements.forEach(function (element) {
            var text = element.textContent;

            // #045694 dark blue
            text = text.replace(new RegExp("\\bfunction\\b", "gi"), '<span style="color: #045694; font-weight: bold">$&</span>');

            // #015493 light blue
            text = text.replace(new RegExp("\\breturn\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\bif\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\belse\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\bconst\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\blet\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\bvar\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\bwhile\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\bnew\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\basync\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\btry\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\bawait\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\bcatch\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\bsuccess\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\bdata\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\btype\\b", "gi"), '<span style="color: #015493">$&</span>');
            text = text.replace(new RegExp("\\bdataType\\b", "gi"), '<span style="color: #015493">$&</span>');

            // #C16D27 orange
            text = text.replace(new RegExp("\\bfalse\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\brequire\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bPromise\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bsetTimeout\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bresolve\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bget\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bJSON\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bstringify\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bnull\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\blog\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bajax\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bthen\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bXMLHttpRequest\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bdone\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bcatch\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bfail\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bval\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bserialize\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\breload\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bjqXHR\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\berrorThrown\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bslice\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            text = text.replace(new RegExp("\\bthis\\b", "gi"), '<span style="color: #C16D27">$&</span>');

            // #648522 light green
            text = text.replace(new RegExp("\\bconsole\\b", "gi"), '<span style="color: #648522">$&</span>');

            var regex = /(['])(?:(?=(\\?))\2.)*?\1/g;
            text = text.replace(regex, '<span style="color: #648522">$&</span>');

            element.innerHTML = text;
        });
    })();
})