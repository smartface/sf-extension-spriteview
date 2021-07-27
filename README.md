# SpriteView Extension from Smartface
[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/smartface/sf-extension-spriteview/master/LICENSE)

An extension to make sprite animations with Smartface Native Framework.

![](https://raw.githubusercontent.com/smartface/sf-extension-spriteview/master/braid.gif)

## Installation
SpriteView can be installed via npm easily from our public npm repository. Execute this command on the script folder:

```
npm i @smartface/extension-spriteview
```

## How to use
SpriteView is nothing but an [ImageView](http://ref.smartface.io/#!/api/UI.ImageView) with additional methods. Since it extends ImageView, you can add it inside layouts.

1) Put the sprite sheet under the folder `images` on the Cloud IDE. 
2) Set the sheet to the SpriteView object as:
```javascript
import SpriteView from "sf-extension-spriteview";

const spriteView = new SpriteView();

spriteView.setSprite({
	sheet: Image.createFromFile("images://braid.png"), // Image for the frame
	frameX: 7, // Distinct image count on X axis
	frameY: 4, // Distinct image count on Y axis
	frameCount: 27 // Frame count of the image
});
```
3) Set the optional fields to the SpriteView as:
````javascript
import ImageView from "@smartface/native/ui/imageview";

spriteView.width = 100; // Width of the frame
spriteView.height = 125; // Height of the frame
spriteView.imageFillType = ImageView.FillType.ASPECTFIT; // Fill type of the frame
````
4) Finally you must make the sprite play by using:
```javascript
spriteView.play(1000); // Transition speed of frames
```

## Sample
The folder `sample` holds the example codes and the sprite sheet. You can put them into your workspace and start using it. 

## Need Help?

Please [submit an issue](https://github.com/smartface/sf-extension-spriteview/issues) on GitHub and provide information about your problem.

## Support & Documentation & Useful Links
- [Guides](https://developer.smartface.io/)
- [API Docs](http://ref.smartface.io/)
- [Smartface Cloud Dashboard](https://cloud.smartface.io)

## Code of Conduct
We are committed to making participation in this project a harassment-free experience for everyone, regardless of the level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.
Please read and follow our [Code of Conduct](https://github.com/smartface/sf-extension-spriteview/blob/master/CODE_OF_CONDUCT.md).

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](https://raw.githubusercontent.com/smartface/sf-extension-spriteview/master/LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.
