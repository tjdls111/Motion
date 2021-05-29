"use strict";
{
    var main_1 = document.querySelector('main');
    ;
    var Img_1 = /** @class */ (function () {
        function Img(title, url) {
            this.title = title;
            this.url = url;
            this.make(url);
        }
        Img.prototype.make = function (url) {
            var img = document.createElement('img');
            img.setAttribute('src', url);
            img.setAttribute('class', 'content');
            main_1 === null || main_1 === void 0 ? void 0 : main_1.appendChild(img);
        };
        return Img;
    }());
    var Video_1 = /** @class */ (function () {
        function Video(title, url) {
            this.title = title;
            this.url = url;
            this.make(title, url);
        }
        Video.prototype.make = function (title, url) {
            var con = document.createElement('div');
            con.innerHTML = "<h1>" + title + "</h1>";
            con.setAttribute('class', 'content');
            var video = document.createElement('iframe');
            video.innerHTML = '<iframe width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            video.setAttribute('src', url);
            con.appendChild(video);
            main_1 === null || main_1 === void 0 ? void 0 : main_1.appendChild(con);
        };
        return Video;
    }());
    var Text_1 = /** @class */ (function () {
        function Text(title, body) {
            this.title = title;
            this.body = body;
            this.make(title, body);
        }
        Text.prototype.make = function (title, body) {
            var text = document.createElement('div');
            text.setAttribute('class', 'content text');
            text.innerHTML = "<h1>" + title + "</h1>" + body;
            main_1 === null || main_1 === void 0 ? void 0 : main_1.appendChild(text);
        };
        return Text;
    }());
    var Todo_1 = /** @class */ (function () {
        function Todo(title, body) {
            this.title = title;
            this.body = body;
            this.make(body);
        }
        Todo.prototype.make = function (body) {
            var todo = document.createElement('div');
            todo.innerHTML = "<label class='text'><input type=\"checkbox\" value=\"" + body + "\"> " + body + "</label>";
            todo.setAttribute('class', 'content text');
            main_1 === null || main_1 === void 0 ? void 0 : main_1.appendChild(todo);
        };
        return Todo;
    }());
    var addPopup_1 = function (type) {
        var popup = document.createElement('div');
        popup.setAttribute('class', 'popup');
        popup.innerHTML = "Title <br> <input type=\"text\" id=\"title\" size=\"40\"> <br><br><br> Body/URL <br> <input type=\"text\" class='UB' size='40'>\n        <br><br><button name=\"button\" class='btn'>Add</button>";
        main_1 === null || main_1 === void 0 ? void 0 : main_1.appendChild(popup);
        var addBtn = document.querySelector('.btn');
        addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', function (event) {
            var t = document.querySelector('#title').value;
            var UB = document.querySelector('.UB').value;
            console.log(t, UB);
            switch (type) {
                case 'image':
                    var img = new Img_1(t, UB);
                    break;
                case 'video':
                    var vid = new Video_1(t, UB);
                    break;
                case 'note':
                    var text = new Text_1(t, UB);
                    break;
                case 'task':
                    var todo = new Todo_1(t, UB);
                    break;
                default:
                    throw new Error('not valid type');
            }
            main_1 === null || main_1 === void 0 ? void 0 : main_1.removeChild(popup);
        });
    };
    var nav = document.querySelector('nav');
    nav === null || nav === void 0 ? void 0 : nav.addEventListener('click', function (event) {
        var menu = event.target.classList[1];
        addPopup_1(menu);
    });
}
