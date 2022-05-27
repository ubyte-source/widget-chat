(function (window) {

	'use strict';

	class Loader {

		/**
		 * *This function returns a string that represents the CSS style of the loader.*
		 * @returns The return value is a string.
		 */

		static style() {
			return 'flat border loader';
		}

		/**
		 * The constructor function creates a new JavaScript object and assigns it to the variable button. 
		 * The button object has a property called elements that is an empty object
		 * @param button - The button that will be used to trigger the dialog.
		 */
		
		constructor(button) {
			this.button = button;
			this.elements = {};
		}

		/**
		 * Get the button element from the DOM
		 * @returns The button element.
		 */
		
		getButton() {
			return this.button;
		}

		/**
		 * Create a span element if it doesn't already exist
		 * @returns The span element.
		 */
		
		getSpan() {
			if (this.elements.hasOwnProperty('span')) return this.elements.span;
			this.elements.span = document.createElement('span');
			return this.elements.span;
		}

		/**
		 * Remove the span element from the DOM
		 * @returns The button object.
		 */
		
		removeSpan() {
			Button.removeElementDOM(this.getSpan());
			return this;
		}

		/**
		 * Create a loader element if it doesn't exist, and return it
		 * @returns The loader element.
		 */
		
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

		/**
		 * * Create a span element and append it to the button element.
		 * * Create a text node and append it to the span element.
		 * * Append the loader element to the button element.
		 * * Set the button element's disabled attribute to true
		 * @param text - The text to display on the button.
		 * @returns The object itself.
		 */
		
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

		/**
		 * Remove the button from the DOM and remove the button's CSS from the page
		 * @returns The button.
		 */
		
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

		/**
		 * Create a new JavaScript error object
		 * @param message - The message to display to the user.
		 */
		
		constructor(message) {
			this.message = message;

			this.elements = {};
		}

		/**
		 * Get the message property of the object
		 * @returns The message property of the Error object.
		 */
		
		getMessage() {
			return this.message;
		}

		/**
		 * Create a new <li> element if it doesn't already exist
		 * @returns The getLi() method returns the li element.
		 */
		
		getLi() {
			if (this.elements.hasOwnProperty('li')) return this.elements.li;
			this.elements.li = document.createElement('li');
			return this.elements.li;
		}

		/**
		 * Set the content of the list item
		 * @param value - The value of the option.
		 * @returns The current instance of the component.
		 */
		
		setContent(value) {
			let li = this.getLi(),
				content = value instanceof HTMLElement ? value : document.createTextNode(value);

			li.innerText = '';
			li.appendChild(content);

			return this;
		}

		/**
		 * Returns the HTML for the list item
		 * @returns The getLi() method is being called and the return value is being passed to the out()
		 * method.
		 */
		
		out() {
			return this.getLi();
		}

		/**
		 * Create a span element with a class name and a text node
		 * @param value - The value of the element.
		 * @param classname - The classname of the element.
		 * @returns The `content` function returns a `span` element with a `class` attribute.
		 */
		
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

		/**
		 * Returns the size of the object
		 * @returns The size of the object.
		 */
		
		static size() {
			return 64;
		}

		/**
		 * Returns a list of colors that can be used
		 * @returns The rgb() function returns an array of colors.
		 */
		
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

		/**
		 * Create a new JavaScript object that will contain the elements of the picture
		 * @param picture - The picture to be displayed.
		 */
		
		constructor(picture) {
			this.picture = picture;

			this.elements = {};
		}

		/**
		 * Create a text element in the SVG document
		 * @returns The text element.
		 */
		
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

		/**
		 * Set the text of the element
		 * @param text - The text to be displayed in the label.
		 * @returns The `setText` method returns the `this` object.
		 */
		
		setText(text) {
			let element = this.getText(),
				label = document.createTextNode(text);

			element.innerText = '';
			element.appendChild(label);

			return this;
		}

		/**
		 * Create a circle element with a random color and return it
		 * @returns The circle element.
		 */
		
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

		/**
		 * Create a new SVG element with the given size and return it
		 * @returns The SVG element.
		 */
		
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

		/**
		 * Get the SVG string and encode it as a base64 string
		 * @returns The SVG image as a base64 encoded string.
		 */
		
		out() {
			let svg = this.getSVG(),
				svg_base64 = btoa(svg.outerHTML);

			return 'data:image/svg+xml;base64,' + svg_base64;
		}
	}

	class Picture {

		/**
		 * Returns the JavaScript expression that will be used to generate the dynamic values for the
		 * `expression` column
		 * @returns The expression() method returns a string that is used to build the dynamic SQL.
		 */
		
		static expression() {
			return 'firstname+lastname+firstname+email';
		}

		/**
		 * It returns the string 'ex'.
		 * @returns Nothing.
		 */
		
		static example() {
			return 'ex';
		}

		/**
		 * Returns the number of letters in the alphabet
		 * @returns The number 2.
		 */
		
		static letters() {
			return 2;
		}

		/**
		 * Create a new JavaScript error object
		 * @param message - The message to display to the user.
		 */
		
		constructor(message) {
			this.message = message;

			this.elements = {};
		}

		/**
		 * Get the message property of the object
		 * @returns The message property of the Error object.
		 */
		
		getMessage() {
			return this.message;
		}

		/**
		 * Get the image element for the user
		 * @returns The image element.
		 */
		
		getImage() {
			if (this.elements.hasOwnProperty('image')) return this.elements.image;

			let user = this.getMessage().getUser();
			this.elements.image = document.createElement('img');

			let picture = user.picture || null;
			if (picture === null) {
				let initials = new window.Chat.Body.Picture.Initials(),
					composed = this.compose(),
					text = composed.length === 0 ? this.constructor.example() : composed;
				initials.setText(text.toUpperCase());
				picture = initials.out();
			}

			this.elements.image.src = picture;

			return this.elements.image;
		}

		/**
		 * Create a new HTML element, and add it to the page
		 * @returns The `getPicture()` method returns the `picture` element.
		 */
		
		get() {
			if (this.elements.hasOwnProperty('picture')) return this.elements.picture;
			let image = this.getImage();
			this.elements.picture = document.createElement('a');
			this.elements.picture.className = 'picture';
			this.elements.picture.appendChild(image);
			return this.elements.picture;
		}

		/**
		 * Compose a string of initials from the user's name
		 * @returns The initials of the user.
		 */
		
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
		
		/**
		 * Set the image source
		 * @param src - The URL of the image to be displayed.
		 * @returns The image object.
		 */
		
		set(src) {
			let image = this.getImage();
			image.src = src;
			return this;
		}

		/**
		 * Get the value of the current node and return it as a string
		 * @returns The value of the variable.
		 */
		
		out() {
			return this.get();
		}
	}

	class Message {

		/**
		 * Returns the current user's login name
		 * @returns Nothing.
		 */
		
		static whoami() {
			return null;
		}

		/**
		 * Returns the id of the current user
		 * @returns The string 'id'
		 */
		
		static id() {
			return 'id';
		}

		/**
		 * The constructor creates an object that contains the body and user details. It also creates an
		 * object that contains the picture and lines elements
		 * @param body - The body of the message.
		 * @param user - The user object.
		 */
		
		constructor(body, user) {
			try {
				if (typeof user !== 'object') throw 'The user detail must be a JSON.';

				this.body = body;
				this.user = user;

				this.elements = {};
				this.elements.picture = new window.Chat.Body.Picture(this);
				this.elements.lines = [];
			}
			catch (message) {
				let debug = this.getBody().getChat().getDebug();
				if (debug === true) console.log(message);
			}
		}

		/**
		 * Get the body of the request
		 * @returns The body of the message.
		 */
		
		getBody() {
			return this.body;
		}

		/**
		 * Get the user object from the current session
		 * @returns The user object.
		 */
		
		getUser() {
			return this.user;
		}

		/**
		 * Get the current user's name
		 * @returns The user's who property.
		 */
		
		getWho() {
			let user = this.getUser();
			if (user.hasOwnProperty(this.constructor.id())) return user[this.constructor.id()];
			return null;
		}

		/**
		 * Get the picture element
		 * @returns The picture element.
		 */
		
		getPicture() {
			return this.elements.picture;
		}
		
		/**
		 * Get the lines of the text
		 * @returns The getLines() method returns the lines array.
		 */
		
		getLines() {
			return this.elements.lines;
		}

		/**
		 * Create a box element if it doesn't exist, and return it
		 * @returns The box element.
		 */
		
		getBox() {
			if (this.elements.hasOwnProperty('box')) return this.elements.box;
			this.elements.box = document.createElement('ul');
			this.elements.box.className = 'paragraphs';
			return this.elements.box;
		}

		/**
		 * Add a line to the chat
		 * @param content - The content of the line.
		 * @returns The new line object.
		 */
		
		addLine(content) {
			let line = new window.Chat.Body.Message.Line(this);
			line.setContent(content);
			this.getBox().appendChild(line.out());
			this.getLines().push(line);
			return line;
		}

		/**
		 * Create a paragraph element, add the picture element, add the box element, and return the paragraph
		 * element
		 * @returns The container element.
		 */
		
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

		/**
		 * Get the container of the current node
		 * @returns The container element.
		 */
		
		out() {
			return this.getContainer();
		}
	}

	class Body {

		/**
		 * *This function returns the string `insertBefore`.*
		 * @returns The string 'insertBefore'.
		 */
		
		static prepend() {
			return 'insertBefore';
		}

		/**
		 * *Return the JavaScript function name for the appendChild method.*
		 * @returns The string 'appendChild'
		 */
		
		static append() {
			return 'appendChild';
		}

		/**
		 * The constructor function creates an object that has a chat property and an elements property. 
		 * The elements property has a messages property
		 * @param chat - The chat object that this message belongs to.
		 */
		
		constructor(chat) {
			this.chat = chat;

			this.elements = {};
			this.elements.messages = [];
		}

		/**
		 * Get the chat object
		 * @returns The chat property of the Chat class.
		 */
		
		getChat() {
			return this.chat;
		}

		/**
		 * Create a container element for the page
		 * @returns The container element.
		 */
		
		getContainer() {
			if (this.elements.hasOwnProperty('container')) return this.elements.container;
			this.elements.container = document.createElement('article');
			this.elements.container.className = 'body pure-u-24-24';
			return this.elements.container;
		}

		/**
		 * Get the messages element
		 * @returns The messages element.
		 */
		
		getMessages() {
			return this.elements.messages;
		}

		/**
		 * It adds a message to the chat
		 * @param user - The user who sent the message.
		 * @param method - The method to use to add the message to the chat.
		 * @returns The new message object.
		 */
		
		addMessage(user, method) {
			let message = new window.Chat.Body.Message(this, user),
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

		/**
		 * Returns the HTML container for the chart
		 * @returns The container element.
		 */
		
		out() {
			return this.getContainer();
		}
	}

	class Chat {

		/**
		 * The constructor function creates an object that contains a Body object
		 */
		
		constructor() {
			this.debug = true;
			this.elements = {};
			this.elements.body = new window.Chat.Body(this);
		}

		/**
		 * Get the debug setting for the current session
		 * @returns The debug property of the class.
		 */
		
		getDebug() {
			return this.debug;
		}

		/**
		 * Get the icon for the button
		 * @returns The icon property of the options object.
		 */
		
		getIcon() {
			return this.options.icon;
		}

		/**
		 * Get the loader from the options
		 * @returns The loader object.
		 */
		
		getLoader() {
			return this.options.loader;
		}

		/**
		 * Create a new element of type `h2` and set its class to `header`
		 * @returns The header element.
		 */
		
		getHeader() {
			if (this.elements.hasOwnProperty('header')) return this.elements.header;
			this.elements.header = document.createElement('h2');
			this.elements.header.className = 'header';
			return this.elements.header;
		}

		/**
		 * Get the body element of the page
		 * @returns The body element of the page.
		 */
		
		getBody() {
			return this.elements.body;
		}

		/**
		 * Create a new footer element if one doesn't exist, and return it
		 * @returns The footer element.
		 */
		
		getFooter() {
			if (this.elements.hasOwnProperty('footer')) return this.elements.footer;
			this.elements.footer = document.createElement('h2');
			this.elements.footer.className = 'footer';
			return this.elements.footer;
		}

		/**
		 * Create a wrapper element for the chat
		 * @returns The wrapper element.
		 */
		
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

		/**
		 * Get the classList property of the wrapper element
		 * @returns The classList property of the wrapper element.
		 */
		
		getClassList() {
			let wrapper = this.getWrapper();
			return wrapper.classList;
		}

		/**
		 * Returns the JavaScript representation of the object
		 * @returns The getWrapper method is returning the HTML code for the div element.
		 */
		
		out() {
			return this.getWrapper();
		}

		/**
		 * Find the closest attribute to the target element
		 * @param target - The element to search for the attribute.
		 * @param attribute - The attribute to search for.
		 * @param html - If true, the result will be the HTML of the closest attribute.
		 * @returns The closest attribute to the target element.
		 */
		
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

		/**
		 * Remove an element from the DOM
		 * @param element - The element to remove from the DOM.
		 * @returns The return value is a boolean value.
		 */
		
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
	window.Chat.Body.Picture.Initials = Initials;
	window.Chat.Loader = Loader;

})(window);
