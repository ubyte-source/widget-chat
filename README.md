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
- [window.Chat](https://github.com/energia-source/widget-chat/tree/main/lib)
- [window.Chat.Body](https://github.com/energia-source/widget-chat/tree/main/lib)
- [window.Chat.Body.Picture](https://github.com/energia-source/widget-chat/tree/main/lib)
- [window.Chat.Body.Picture.Initials](https://github.com/energia-source/widget-chat/tree/main/lib)
- [window.Chat.Body.Message](https://github.com/energia-source/widget-chat/tree/main/lib)
- [window.Chat.Body.Message.Line](https://github.com/energia-source/widget-chat/tree/main/lib)
- [window.Chat.Loader](https://github.com/energia-source/widget-chat/tree/main/lib)

<br>

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-chat/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-chat/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
