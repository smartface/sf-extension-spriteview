const extend    = require("js-base/core/extend");
const Page      = require('sf-core/ui/page');
const Image     = require('sf-core/ui/image');
const ImageView = require('sf-core/ui/imageview');

const SpriteView = require("sf-extension-spriteview");

var SpritePage = new extend(Page)(
    function(_super,params)
    {
        _super(this);

        var characterSprite = new SpriteView({
            width: 100, height: 125,
            imageFillType: ImageView.FillType.ASPECTFIT
        });
        this.layout.addChild(characterSprite);
        
        characterSprite.setSprite({
            sheet: Image.createFromFile("images://braid.png"),
            frameX: 7,
            frameY: 4,
            frameCount: 27
        });

        this.onShow = function() {
            characterSprite.play(1000);
        };
    }
);

module.exports = SpritePage;