/**
 * SpriteView utility
 * @type {object}
 * @author Berk Baski <berk.baski@smartface.io>
 * @copyright Smartface 2021
 */

import ImageView from "sf-core/ui/imageview";
import Image from "sf-core/ui/image";

declare interface ISpriteViewOptions {
    /**
     * Width of the frame
     */
    width?: number;
    /**
     * Height of the frame
     */
    height?: number;
    /**
     * Fill type of the frame
     */
    imageFillType?: ImageView.FillType;
}

export type SetSpriteOptions = {
    /**
     * Image for the frame
     */
    sheet: Image,
    /**
     * Frame X count
     * Distinct image count on X axis
     */
    frameX: number,
    /**
     * Frame Y count
     * Distinct image count on Y axis
     */
    frameY: number,
    /**
     * Frame count of the image. If no value is given, it takes the multiply frameX by frameY value.
     */
    frameCount?: number
}

/**
 * @class
 * @author Berk Baski <berk.baski@smartface.io>
 * @copyright Smartface 2021
 * @example
 * import SpriteView from "sf-extension-spriteview";
 * import ImageView from "sf-core/ui/imageview";
 * 
 * const spriteView = new SpriteView({
 *     width: 150,
 *     height: 200,
 *     imageFillType: ImageView.FillType.ASPECTFIT
 * });
 */
export default class {

    /**
     * Width of the frame
     */
    width: number;

    /**
     * Height of the frame
     */
    height: number;

    /**
     * Fill type of the frame
     */
    imageFillType: ImageView.FillType;

    /**
     * @class
     * @author Berk Baski <berk.baski@smartface.io>
     * @copyright Smartface 2021
     * @example
     * import SpriteView from "sf-extension-spriteview";
     * import ImageView from "sf-core/ui/imageview";
     * 
     * const spriteView = new SpriteView({
     *     width: 150,
     *     height: 200,
     *     imageFillType: ImageView.FillType.ASPECTFIT
     * });
     */
    constructor(options?: ISpriteViewOptions);

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
    setSprite(params: SetSpriteOptions): void;

    /**
     * Starts the animation according to the given `duration` value.
     * @function play
     * @param {number} duration Transition speed of frames
     * @example
     * spriteView.play(1000);
     */
    play(duration: number): void;

    /**
     * Goes to the next frame.
     * @function showNextFrame
     * @example
     * spriteView.showNextFrame();
     */
    showNextFrame(): void;

    /**
     * Stops animation.
     * @function stop
     * @example
     * spriteView.stop();
     */
    stop(): void;
}
