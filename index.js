const Timer = require("@smartface/native/timer");
const ImageView = require("@smartface/native/ui/imageview");

function SpriteView() {
  ImageView.apply(this, arguments);
}

SpriteView.prototype = Object.create(ImageView.prototype);
SpriteView.prototype.constructor = SpriteView;

SpriteView.prototype._currentFrame = 0;
SpriteView.prototype._frameCount = 0;
SpriteView.prototype._frames = [];
SpriteView.prototype._timer = null;

SpriteView.prototype.setSprite = function (params) {
  this._frames = [];
  this._frameCount = params["frameCount"] || params["frameX"] * params["frameY"];
  this._frameWidth = params["sheet"].width / params["frameX"];
  this._frameHeight = params["sheet"].height / params["frameY"];

  for (let currentY = 0; currentY < params["frameY"]; currentY++) {
    for (let currentX = 0; currentX < params["frameX"] && (currentX + currentY) < this._frameCount; currentX++) {
      params["sheet"].crop(
        currentX * this._frameWidth,
        currentY * this._frameHeight,
        this._frameWidth,
        this._frameHeight,
        function (e) {
          this._frames.push(e.image);
        }.bind(this),
        function () {
          console.log("failed to parse sheet.");
        }.bind(this)
      );
    }
  }
};

SpriteView.prototype.play = function (duration) {
  const frameDuration = duration / this._frameCount;
  this._timer = Timer.setInterval({
    delay: frameDuration,
    task: function () {
      this.showNextFrame();
    }.bind(this)
  });
}

SpriteView.prototype.stop = function () {
  if (this._timer) {
    Timer.clearTimer(this._timer);
  }
}

SpriteView.prototype.showNextFrame = function () {
  this._currentFrame = (this._currentFrame + 1) % this._frameCount;
  this.image = this._frames[this._currentFrame];
}

module.exports = SpriteView;