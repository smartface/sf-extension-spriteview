const extend = require("js-base/core/extend");

const Timer     = require("sf-core/timer");
const ImageView = require("sf-core/ui/imageview");

const SpriteView = extend(ImageView)(
    function(_super,params)
    {
        _super(this, params);
        
        this._currentFrame = 0;
        this._frameCount = 0;
        this._frames = [];
        this._timer = null;
        
        this.setSprite = function(params) {
            this._frames = [];
            this._frameCount = params["frameCount"];
            
            var frameWidth  = params["sheet"].width  / params["frameX"];
            var frameHeight = params["sheet"].height / params["frameY"];
            for (var currentY = 0; currentY < params["frameY"]; currentY++) {
                for (var currentX = 0; currentX < params["frameX"] && (currentX + currentY) < this._frameCount; currentX++) {
                    params["sheet"].crop(
                        currentX * frameWidth,
                        currentY * frameHeight,
                        frameWidth,
                        frameHeight,
                        function(e) {
                            this._frames.push(e.image);
                        }.bind(this),
                        function() {
                            console.log("failed to parse sheet.");
                        }.bind(this)
                    );
                }
            }
        };
        
        this.play = function(duration) {
            var frameDuration = duration / this._frameCount;

            this._timer = Timer.setInterval({
                delay: frameDuration,
                task: function() {
                    this.showNextFrame();
                }.bind(this)
            });
        };

        this.showNextFrame = function() {
            this._currentFrame = (this._currentFrame + 1) % this._frameCount;
            this.image = this._frames[this._currentFrame];
        };
        
        this.stop = function() {
            if (this._timer) {
                Timer.clearTimer(this._timer);
            }
        };
    }
);

module.exports = SpriteView;