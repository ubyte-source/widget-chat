# Documentation widget-chat

Widget Javascript Chat is a library used to create a sort of chat between multiple users.

## Usage

So the basic setup looks something like this:

```

let chat = new Chat();

chat.getFooter().appendChild(<HTMLElement>);
chat.getHeader().appendChild(<HTMLElement>);

chat.getBody().addMessage(...<HTMLElement>);

document.appendChild(chat.out());

```

## Structure

library:
- [window.Chat](https://github.com/energia-source/widget-chat#class-windowchat-usable-methods)
- [window.Chat.Body](https://github.com/energia-source/widget-chat#class-windowchatbody-usable-methods)
- [window.Chat.Body.Picture](https://github.com/energia-source/widget-chat#class-windowchatbodypicture-usable-methods)
- [window.Chat.Body.Picture.Initials](https://github.com/energia-source/widget-chat#class-windowchatbodypictureinitials-usable-methods)
- [window.Chat.Body.Message](https://github.com/energia-source/widget-chat#class-windowchatbodymessage-usable-methods)
- [window.Chat.Body.Message.Line](https://github.com/energia-source/widget-chat#class-windowchatbodymessageline-usable-methods)
- [window.Chat.Loader](https://github.com/energia-source/widget-chat#class-windowchatloader-usable-methods)

<br>

#### ***Class window.Chat usable methods***

##### `constructor()`

The constructor function creates an object that contains a Body object

##### `getDebug()`

Get the debug setting for the current session

 * **Returns:** The debug property of the class.

##### `getIcon()`

Get the icon for the button

 * **Returns:** The icon property of the options object.

##### `getLoader()`

Get the loader from the options

 * **Returns:** The loader object.

##### `getHeader()`

Create a new element of type `h2` and set its class to `header`

 * **Returns:** The header element.

##### `getBody()`

Get the body element of the page

 * **Returns:** The body element of the page.

##### `getFooter()`

Create a new footer element if one doesn't exist, and return it

 * **Returns:** The footer element.

##### `getWrapper()`

Create a wrapper element for the chat

 * **Returns:** The wrapper element.

##### `getClassList()`

Get the classList property of the wrapper element

 * **Returns:** The classList property of the wrapper element.

##### `out()`

Returns the JavaScript representation of the object

 * **Returns:** The getWrapper method is returning the HTML code for the div element.

##### `static closestAttribute(target, attribute, html)`

Find the closest attribute to the target element

 * **Parameters:**
   * `target` — The element to search for the attribute.
   * `attribute` — The attribute to search for.
   * `html` — If true, the result will be the HTML of the closest attribute.
 * **Returns:** The closest attribute to the target element.

##### `static removeElementDOM(element)`

Remove an element from the DOM

 * **Parameters:** `element` — The element to remove from the DOM.
 * **Returns:** The return value is a boolean value.

<br>

#### ***Class window.Chat.Body usable methods***

##### `static prepend()`

*This function returns the string `insertBefore`.*

 * **Returns:** The string 'insertBefore'.

##### `static append()`

*Return the JavaScript function name for the appendChild method.*

 * **Returns:** The string 'appendChild'

##### `constructor(chat)`

The constructor function creates an object that has a chat property and an elements property. The elements property has a messages property

 * **Parameters:** `chat` — The chat object that this message belongs to.

##### `getChat()`

Get the chat object

 * **Returns:** The chat property of the Chat class.

##### `getContainer()`

Create a container element for the page

 * **Returns:** The container element.

##### `getMessages()`

Get the messages element

 * **Returns:** The messages element.

##### `addMessage(user, method)`

It adds a message to the chat

 * **Parameters:**
   * `user` — The user who sent the message.
   * `method` — The method to use to add the message to the chat.
 * **Returns:** The new message object.

##### `out()`

Returns the HTML container for the chart

 * **Returns:** The container element.

<br>

#### ***Class window.Chat.Body.Picture usable methods***

##### `static expression()`

Returns the JavaScript expression that will be used to generate the dynamic values for the `expression` column

 * **Returns:** The expression() method returns a string that is used to build the dynamic SQL.

##### `static example()`

It returns the string 'ex'.

 * **Returns:** The object itself. 

##### `static letters()`

Returns the number of letters in the alphabet

 * **Returns:** The number 2.

##### `constructor(message)`

Create a new JavaScript error object

 * **Parameters:** `message` — The message to display to the user.

##### `getMessage()`

Get the message property of the object

 * **Returns:** The message property of the Error object.

##### `getImage()`

Get the image element for the user

 * **Returns:** The image element.

##### `get()`

Create a new HTML element, and add it to the page

 * **Returns:** The `getPicture()` method returns the `picture` element.

##### `compose()`

Compose a string of initials from the user's name

 * **Returns:** The initials of the user.

##### `set(src)`

Set the image source

 * **Parameters:** `src` — The URL of the image to be displayed.
 * **Returns:** The image object.

##### `out()`

Get the value of the current node and return it as a string

 * **Returns:** The value of the variable.


<br>

#### ***Class window.Chat.Body.Picture.Initials usable methods***

##### `static size()`

Returns the size of the object

 * **Returns:** The size of the object.

##### `static rgb()`

Returns a list of colors that can be used

 * **Returns:** The rgb() function returns an array of colors.

##### `constructor(picture)`

Create a new JavaScript object that will contain the elements of the picture

 * **Parameters:** `picture` — The picture to be displayed.

##### `getText()`

Create a text element in the SVG document

 * **Returns:** The text element.

##### `setText(text)`

Set the text of the element

 * **Parameters:** `text` — The text to be displayed in the label.
 * **Returns:** The `setText` method returns the `this` object.

##### `getBackground()`

Create a circle element with a random color and return it

 * **Returns:** The circle element.

##### `getSVG()`

Create a new SVG element with the given size and return it

 * **Returns:** The SVG element.

##### `out()`

Get the SVG string and encode it as a base64 string

 * **Returns:** The SVG image as a base64 encoded string.


<br>

#### ***Class window.Chat.Body.Message usable methods***

##### `static whoami()`

Returns the current user's login name

 * **Returns:** Nothing 

##### `static id()`

Returns the id of the current user

 * **Returns:** The string 'id'

##### `constructor(body, user)`

The constructor creates an object that contains the body and user details. It also creates an object that contains the picture and lines elements

 * **Parameters:**
   * `body` — The body of the message.
   * `user` — The user object.

##### `getBody()`

Get the body of the request

 * **Returns:** The body of the message.

##### `getUser()`

Get the user object from the current session

 * **Returns:** The user object.

##### `getWho()`

Get the current user's name

 * **Returns:** The user's who property.

##### `getPicture()`

Get the picture element

 * **Returns:** The picture element.

##### `getLines()`

Get the lines of the text

 * **Returns:** The getLines() method returns the lines array.

##### `getBox()`

Create a box element if it doesn't exist, and return it

 * **Returns:** The box element.

##### `addLine(content)`

Add a line to the chat

 * **Parameters:** `content` — The content of the line.
 * **Returns:** The new line object.

##### `getContainer()`

Create a paragraph element, add the picture element, add the box element, and return the paragraph element

 * **Returns:** The container element.

##### `out()`

Get the container of the current node

 * **Returns:** The container element.

<br>

#### ***Class window.Chat.Body.Message.Line usable methods***

##### `constructor(message)`

Create a new JavaScript error object

 * **Parameters:** `message` — The message to display to the user.

##### `getMessage()`

Get the message property of the object

 * **Returns:** The message property of the Error object.

##### `getLi()`

Create a new <li> element if it doesn't already exist

 * **Returns:** The getLi() method returns the li element.

##### `setContent(value)`

Set the content of the list item

 * **Parameters:** `value` — The value of the option.
 * **Returns:** The current instance of the component.

##### `out()`

Returns the HTML for the list item

 * **Returns:** The getLi() method is being called and the return value is being passed to the out()

     method.

##### `static content(value, classname)`

Create a span element with a class name and a text node

 * **Parameters:**
   * `value` — The value of the element.
   * `classname` — The classname of the element.
 * **Returns:** The `content` function returns a `span` element with a `class` attribute.

<br>

#### ***Class window.Chat.Loader usable methods***

##### `static style()`

*This function returns a string that represents the CSS style of the loader.*

 * **Returns:** The return value is a string.

##### `constructor(button)`

The constructor function creates a new JavaScript object and assigns it to the variable button. The button object has a property called elements that is an empty object

 * **Parameters:** `button` — The button that will be used to trigger the dialog.

##### `getButton()`

Get the button element from the DOM

 * **Returns:** The button element.

##### `getSpan()`

Create a span element if it doesn't already exist

 * **Returns:** The span element.

##### `removeSpan()`

Remove the span element from the DOM

 * **Returns:** The button object.

##### `get()`

Create a loader element if it doesn't exist, and return it

 * **Returns:** The loader element.

##### `apply(text)`

* Create a span element and append it to the button element. * Create a text node and append it to the span element. * Append the loader element to the button element. * Set the button element's disabled attribute to true

 * **Parameters:** `text` — The text to display on the button.
 * **Returns:** Nothing 

##### `remove()`

Remove the button from the DOM and remove the button's CSS from the page

 * **Returns:** The button.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-chat/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-chat/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details