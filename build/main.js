"use strict";
{
    var main_1 = document.querySelector('main');
    ;
    function addPopup() {
        var popup = document.createElement('div');
        popup.setAttribute('class', 'popup');
        popup.innerHTML = "Title <br> <input type=\"text\" id=\"name\" name=\"name\" size=\"40\"> <br><br><br> Body/URL <br> <input type=\"text\" id=\"name\" name=\"name\" size='40'>";
        main_1 === null || main_1 === void 0 ? void 0 : main_1.appendChild(popup);
    }
    addPopup();
    var Img_1 = /** @class */ (function () {
        function Img(title, url, body) {
            this.title = title;
            this.url = url;
            this.body = body;
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
        function Video(title, url, body) {
            this.title = title;
            this.url = url;
            this.body = body;
            this.make(title, url);
        }
        Video.prototype.make = function (title, url) {
            var con = document.createElement('div');
            con.innerHTML = "<h1>" + title + "</h1>";
            con.setAttribute('class', 'content');
            var video = document.createElement('iframe');
            video.innerHTML = '<iframe width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            video.setAttribute('src', "https://www.youtube.com/embed/ov3NRyoIEQ4");
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
    var nav = document.querySelector('nav');
    nav === null || nav === void 0 ? void 0 : nav.addEventListener('click', function (event) {
        var menu = event.target.classList[1];
        switch (menu) {
            case 'image':
                var img = new Img_1('good img', 'https://picsum.photos/300/200', 'good');
                break;
            case 'video':
                var vid = new Video_1('fun', 'fdf', 'seventeen');
                break;
            case 'note':
                var text = new Text_1('hi', '일단 글씨가 들어간다.');
                break;
            case 'task':
                var todo = new Todo_1('hi', '할일~~');
                break;
        }
    });
}
