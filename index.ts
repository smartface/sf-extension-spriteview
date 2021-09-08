import Image from "@smartface/native/ui/image";
import ImageView from "@smartface/native/ui/imageview";
import Timer from "@smartface/native/global/timer";

interface SetSpriteOptions {
    /**
     * Image for the frame
     */
    sheet: Image;
    /**
     * Frame X count
     * Distinct image count on X axis
     */
    frameX: number;
    /**
     * Frame Y count
     * Distinct image count on Y axis
     */
    frameY: number;
    /**
     * Frame count of the image. If no value is given, it takes the multiply frameX by frameY value.
     */
    frameCount?: number;
}


 /**
  * @class
  * @author Berk Baski <berk.baski@smartface.io>
  * @copyright Smartface 2021
  * @example
  * import SpriteView from "sf-extension-spriteview";
  * import ImageView from "@smartface/native/ui/imageview";
  * 
  * const spriteView = new SpriteView({
  *     width: 150,
  *     height: 200,
  *     imageFillType: ImageView.FillType.ASPECTFIT
  * });
  */
export default class SpriteView extends ImageView {
    private _currentFrame: number = 0;
    private _frameCount: number = 0;
    private _frameWidth: number = 0;
    private _frameHeight: number = 0;
    private _frames: Image[] = [];
    private _timer?: Timer;

  /**
   * @class
   * @author Berk Baski <berk.baski@smartface.io>
   * @copyright Smartface 2021
   * @example
   * import SpriteView from "sf-extension-spriteview";
   * import ImageView from "@smartface/native/ui/imageview";
   * 
   * const spriteView = new SpriteView({
   *     width: 150,
   *     height: 200,
   *     imageFillType: ImageView.FillType.ASPECTFIT
   * });
   */    
    constructor(args: Partial<typeof ImageView>) {
        super(args);
    }

    /**
     * Prepares the frame with the given value.
     * @function setSprite
     * @param {SetSpriteOptions} params
     * @example
     * spriteView.setSprite({
     *      sheet: Image.createFromFile("images://braid.png"),
     *      frameX: 7,
     *      frameY: 4,
     *      frameCount: 27
     *});
     */
    setSprite = (params: SetSpriteOptions) => {
        this._frames = [];
        this._frameCount = params.frameCount || params.frameX * params.frameY;
        this._frameWidth = params.sheet.width / params.frameX;
        this._frameHeight = params.sheet.height / params.frameY;
        
        for (let currentY = 0; currentY < params.frameY; currentY++) {
            for (let currentX = 0; currentX < params.frameX && (currentX + currentY) < this._frameCount; currentX++) {
              params.sheet.crop(
                Math.round(currentX * this._frameWidth),
                Math.round(currentY * this._frameHeight),
                Math.round(this._frameWidth),
                Math.round(this._frameHeight),
                (e) => {
                  this._frames.push(e.image);
                },
                () => {
                  console.log("failed to parse sheet.");
                }
              );
            }
          }
    }

     /**
      * Starts the animation according to the given `duration` value.
      * @function play
      * @param {number} duration Transition speed of frames
      * @example
      * spriteView.play(1000);
      */
    play = (duration: number) => {
        const frameDuration = duration / this._frameCount;
        this._timer = Timer.setInterval({
          delay: frameDuration,
          task: () => {
            this.showNextFrame();
          }
        }); 
    }

     /**
      * Stops animation.
      * @function stop
      * @example
      * spriteView.stop();
      */    
    stop = () => {
        if(this._timer) {
            Timer.clearTimer(this._timer);
        }
    }

     /**
      * Goes to the next frame.
      * @function showNextFrame
      * @example
      * spriteView.showNextFrame();
      */    
    showNextFrame = () => {
        this._currentFrame = (this._currentFrame + 1) % this._frameCount;
        this.image = this._frames[this._currentFrame];
    }

}