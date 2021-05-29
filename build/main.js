"use strict";
{
    var main_1 = document.querySelector('main');
    ;
    var Img = /** @class */ (function () {
        function Img(title, url, body) {
            this.title = title;
            this.url = url;
            this.body = body;
            this.make(url);
        }
        Img.prototype.make = function (url) {
            var img = document.createElement('img');
            img.setAttribute('src', url);
            img.setAttribute;
            main_1 === null || main_1 === void 0 ? void 0 : main_1.appendChild(img);
        };
        return Img;
    }());
    var img = new Img('good img', 'https://picsum.photos/300/300', 'good');
}
