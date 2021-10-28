(function (window) {

	'use strict';

	class Loader {

		static style() {
			return 'flat border loader';
		}

		constructor(button) {
			this.button = button;
			this.elements = {};
		}

		getButton() {
			return this.button;
		}
		getSpan() {
			if (this.elements.hasOwnProperty('span')) return this.elements.span;
			this.elements.span = document.createElement('span');
			return this.elements.span;
		}
		removeSpan() {
			Button.removeElementDOM(this.getSpan());
			return this;
		}
		get() {
			if (this.elements.hasOwnProperty('loader')) return this.elements.loader;
			this.elements.loader = document.createElement('div');
			this.elements.loader.className = 'loader';
			for (let i = 0; i < 3; i++) {
				let bounce = document.createElement('div');
				bounce.className = 'bounce-' + i;
				this.elements.loader.appendChild(bounce);
			}
			return this.elements.loader;
		}
		apply(text) {
			let button = this.getButton(), span = this.getSpan(), loader = this.get(), element = button.out(), css = this.constructor.style();

			button.addStyle(css);
			span.innerText = '';

			if (typeof text !== 'string' || text.length === 0) {
				this.removeSpan();
			} else {
				let node = document.createTextNode(text);
				element.appendChild(span);
				span.appendChild(node);
			}

			element.appendChild(loader);
			element.setAttribute('disabled', true);

			return this;
		}
		remove() {
			let button = this.getButton(), css = this.constructor.style();

			this.removeSpan();

			button.removeStyle(css);
			button.out().removeAttribute('disabled');

			Button.removeElementDOM(this.get());

			return this;
		}
	}

	class Line {

		constructor(message) {
			this.message = message;

			this.elements = {};
		}

		getMessage() {
			return this.message;
		}
		getLi() {
			if (this.elements.hasOwnProperty('li')) return this.elements.li;
			this.elements.li = document.createElement('li');
			return this.elements.li;
		}
		setContent(value) {
			let li = this.getLi(),
				content = value instanceof HTMLElement ? value : document.createTextNode(value);

			li.innerText = '';
			li.appendChild(content);

			return this;
		}
		out() {
			return this.getLi();
		}
		static content(value, classname) {
			let element = document.createElement('span');
			if (typeof classname === 'string'
				&& classname.length > 0) element.className = classname;

			let contnet_value = value === null ? String.fromCharCode(32) : value,
				content = contnet_value instanceof HTMLElement
					? contnet_value
					: document.createTextNode(contnet_value.toString());

			element.appendChild(content);

			return element;
		}
	}

	class Initials {

		static size() {
			return 64;
		}
		static rgb() {
			return [
				'rgba(72, 61, 139, 0.6)',
				'rgba(34, 139, 34, 0.6)',
				'rgba(0, 128, 0, 0.6)',
				'rgba(211, 211, 211, 0.6)',
				'rgba(255, 99, 71, 0.6)',
				'rgba(112, 128, 144, 0.6)',
				'rgba(255, 0, 0, 0.6)',
				'rgba(219, 112, 147, 0.6)',
				'rgba(25, 25, 112, 0.6)',
				'rgba(255, 105, 180, 0.6)'
			];
		}

		constructor(picture) {
			this.picture = picture;

			this.elements = {};
		}

		getText() {
			if (this.elements.hasOwnProperty('text')) return this.elements.text;
			let half = this.constructor.size() / 2;

			this.elements.text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			this.elements.text.setAttribute('dominant-baseline', 'central');
			this.elements.text.setAttribute('text-anchor', 'middle');
			this.elements.text.setAttribute('font-size', half.toString() + 'px');
			this.elements.text.setAttribute('font-family', 'Arial');
			this.elements.text.setAttribute('fill', '#ffffff');
			this.elements.text.setAttribute('x', '50%');
			this.elements.text.setAttribute('y', '50%');
			return this.elements.text;
		}
		setText(text) {
			let element = this.getText(),
				label = document.createTextNode(text);

			element.innerText = '';
			element.appendChild(label);

			return this;
		}
		getBackground() {
			if (this.elements.hasOwnProperty('circle')) return this.elements.circle;
			let half = this.constructor.size() / 2,
				rgb = this.constructor.rgb(),
				random = rgb[Math.floor(Math.random() * rgb.length)];

			this.elements.circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
			this.elements.circle.setAttribute('fill', random);
			this.elements.circle.setAttribute('stroke', random);
			this.elements.circle.setAttribute('cx', half);
			this.elements.circle.setAttribute('cy', half);
			this.elements.circle.setAttribute('r', half);
			return this.elements.circle;
		}
		getSVG() {
			if (this.elements.hasOwnProperty('base')) return this.elements.base;
			let background = this.getBackground(),
				text = this.getText();

			this.elements.base = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			this.elements.base.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
			this.elements.base.setAttribute('version', '1.1');
			this.elements.base.setAttribute('viewBox', '0 0' + String.fromCharCode(32) + this.constructor.size() + String.fromCharCode(32) + this.constructor.size());
			this.elements.base.appendChild(background);
			this.elements.base.appendChild(text);

			return this.elements.base;
		}
		out() {
			let svg = this.getSVG(),
				svg_base64 = btoa(svg.outerHTML);

			return 'data:image/svg+xml;base64,' + svg_base64;
		}
	}

	class Picture {

		static expression() {
			return 'firstname+lastname+firstname+email';
		}
		static example() {
			return 'ex';
		}
		static letters() {
			return 2;
		}

		constructor(message) {
			this.message = message;

			this.elements = {};
		}

		getMessage() {
			return this.message;
		}
		getImage() {
			if (this.elements.hasOwnProperty('image')) return this.elements.image;

			let user = this.getMessage().getUser();
			this.elements.image = document.createElement('img');

			let picture = user.picture || null;
			if (picture === null) {
				let initials = new Initials(),
					composed = this.compose(),
					text = composed.length === 0 ? this.constructor.example() : composed;
				initials.setText(text.toUpperCase());
				picture = initials.out();
			}

			this.elements.image.src = picture;

			return this.elements.image;
		}
		get() {
			if (this.elements.hasOwnProperty('picture')) return this.elements.picture;
			let image = this.getImage();
			this.elements.picture = document.createElement('a');
			this.elements.picture.className = 'picture';
			this.elements.picture.appendChild(image);
			return this.elements.picture;
		}
		compose() {
			let user = this.getMessage().getUser(),
				expression = this.constructor.expression().split(String.fromCharCode(43)),
				initials = [],
				found = [];
			for (let item = 0; item < expression.length; item++) {
				if (false === user.hasOwnProperty(expression[item])) continue;

				let find = found.filter(function (value) {
					return value === expression[item];
				});
				let string = user[expression[item]].toLowerCase().substr(find.length, 1);

				if (/^[a-z]$/.test(string)) initials.push(string);
				if (initials.length === this.constructor.letters()) break;

				found.push(expression[item]);
			}

			return initials.join('');
		}
		set(src) {
			let image = this.getImage();
			image.src = src;
			return this;
		}
		out() {
			return this.get();
		}
	}

	class Message {

		static whoami() {
			return null;
		}
		static id() {
			return 'id';
		}

		constructor(body, user) {
			try {
				if (typeof user !== 'object') throw 'The user detail must be a JSON.';

				this.body = body;
				this.user = user;

				this.elements = {};
				this.elements.picture = new Picture(this);
				this.elements.lines = [];
			}
			catch (message) {
				let debug = this.getBody().getChat().getDebug();
				if (debug === true) console.log(message);
			}
		}

		getBody() {
			return this.body;
		}
		getUser() {
			return this.user;
		}
		getWho() {
			let user = this.getUser();
			if (user.hasOwnProperty(this.constructor.id())) return user[this.constructor.id()];
			return null;
		}
		getPicture() {
			return this.elements.picture;
		}
		getLines() {
			return this.elements.lines;
		}
		getBox() {
			if (this.elements.hasOwnProperty('box')) return this.elements.box;
			this.elements.box = document.createElement('ul');
			this.elements.box.className = 'paragraphs';
			return this.elements.box;
		}
		addLine(content) {
			let line = new Line(this);
			line.setContent(content);
			this.getBox().appendChild(line.out());
			this.getLines().push(line);
			return line;
		}
		getContainer() {
			if (this.elements.hasOwnProperty('container')) return this.elements.container;
			let who = this.getWho(),
				box = this.getBox(),
				picture = this.getPicture().out();

			this.elements.container = document.createElement('p');
			this.elements.container.className = 'message pure-u-md-16-24 pure-u-22-24';
			this.elements.container.appendChild(picture);
			this.elements.container.appendChild(box);

			if (who === this.constructor.whoami()) this.elements.container.classList.add('me');

			return this.elements.container;
		}
		out() {
			return this.getContainer();
		}
	}

	class Body {

		static prepend() {
			return 'insertBefore';
		}
		static append() {
			return 'appendChild';
		}

		constructor(chat) {
			this.chat = chat;

			this.elements = {};
			this.elements.messages = [];
		}

		getChat() {
			return this.chat;
		}
		getContainer() {
			if (this.elements.hasOwnProperty('container')) return this.elements.container;
			this.elements.container = document.createElement('article');
			this.elements.container.className = 'body pure-u-24-24';
			return this.elements.container;
		}
		getMessages() {
			return this.elements.messages;
		}
		addMessage(user, method) {
			let message = new Message(this, user),
				container = this.getContainer();
			try {
				let func = method === this.constructor.prepend() || method === this.constructor.append()
					? method
					: null;
				if (func === null) throw 'You have to select where to place the message.';

				arguments.__proto__ = Array.prototype;
				for (let item = 2; item < arguments.length; item++)
					message.addLine(arguments[item]);

				container[func](message.out(), container.firstChild);
				this.getMessages().push(message);
			}
			catch (message) {
				let debug = this.getChat().getDebug();
				if (debug === true) console.log(message);
			}

			return message;
		}
		out() {
			return this.getContainer();
		}
	}

	class Chat {

		constructor() {
			this.debug = true;
			this.elements = {};
			this.elements.body = new Body(this);
		}

		getDebug() {
			return this.debug;
		}
		getIcon() {
			return this.options.icon;
		}
		getLoader() {
			return this.options.loader;
		}
		getHeader() {
			if (this.elements.hasOwnProperty('header')) return this.elements.header;
			this.elements.header = document.createElement('h2');
			this.elements.header.className = 'header';
			return this.elements.header;
		}
		getBody() {
			return this.elements.body;
		}
		getFooter() {
			if (this.elements.hasOwnProperty('footer')) return this.elements.footer;
			this.elements.footer = document.createElement('h2');
			this.elements.footer.className = 'footer';
			return this.elements.footer;
		}
		getWrapper() {
			if (this.elements.hasOwnProperty('wrapper')) return this.elements.wrapper;
			let header = this.getHeader(),
				footer = this.getFooter(),
				body = this.getBody();

			this.elements.wrapper = document.createElement('div');
			this.elements.wrapper.className = 'chat';
			this.elements.wrapper.appendChild(header);
			this.elements.wrapper.appendChild(body.out());
			this.elements.wrapper.appendChild(footer);

			return this.elements.wrapper;
		}
		getClassList() {
			let wrapper = this.getWrapper();
			return wrapper.classList;
		}
		out() {
			return this.getWrapper();
		}
		static closestAttribute(target, attribute, html) {
			if (typeof attribute === 'undefined'
				|| !attribute.length) return null;

			let result = null, element = target;

			do {
				let tagname = element.tagName.toLowerCase();
				if (tagname === 'body') return null;

				result = element.getAttribute(attribute);
				if (result !== null) {
					result = result.toString();
					if (result.length) break;
				}

				element = element.parentNode;
			} while (element !== null
				|| typeof element === 'undefined');

			if (typeof html === 'undefined'
				|| html !== true) return result;

			return element;
		}
		static removeElementDOM(element) {
			let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
			if (parent === null) return false;
			parent.removeChild(element);
			return true;
		}
	};

	window.Chat = Chat;
	window.Chat.Body = Body;
	window.Chat.Body.Picture = Picture;
	window.Chat.Body.Message = Message;
	window.Chat.Body.Message.Line = Line;

})(window);