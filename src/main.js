/**
 * Modified version of Lea Verou's
 * {@link https://github.com/leaverou/conic-gradient conic-gradient}.
 *
 * @example
 * paintColorWheelToCanvas(document.querySelector('#canvas'), 250);
 *
 * @param   {HTMLCanvasElement} canvas Canvas to paint the color wheel
 * @param   {Number}            size   Color wheel radius in pixels
 * @returns {HTMLCanvasElement} canvas The passed canvas for easier chaining
 */
export default function paintColorWheelToCanvas(canvas, size) {
    const half = size / 2;
    const radius = Math.sqrt(2) * half;
    const deg = Math.PI / 180;
    const pi2 = Math.PI * 2;

    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');

    // .02: To prevent empty blank line and corresponding moire
    // only non-alpha colors are cared now
    const thetaOffset = 0.5 * deg + 0.02;

    // Transform coordinate system so that angles start from the top left, like in CSS
    ctx.translate(half, half);
    ctx.rotate(-Math.PI / 2);
    ctx.translate(-half, -half);

    for (let i = 0; i < 360; i += 0.5) {
        ctx.fillStyle = `hsl(${i}, 100%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(half, half);

        const beginArg = i * deg;
        const endArg = Math.min(pi2, beginArg + thetaOffset);

        ctx.arc(half, half, radius, beginArg, endArg);

        ctx.closePath();
        ctx.fill();
    }

    return canvas;
}
