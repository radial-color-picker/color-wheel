import paint from '../src/main';
import { createCanvas } from 'canvas';

describe('draws canvas correctly', () => {
    const size = 280;
    let canvas = null;

    beforeEach(() => {
        canvas = createCanvas(size, size);
    });

    it('should draw red in the top center', () => {
        paint(canvas, 280);

        // rgb(255, 0, 0) / hsl(0, 100%, 50%);
        const [r, g, b] = getColor(canvas, 140, 0);

        expect(r).toBe(255);
        expect(g).toBe(0);
        expect(b).toBe(0);
    });

    it('should draw magenta in the top left corner', () => {
        paint(canvas, 280);

        // rgb(255, 190, 0) / hsl(315, 100%, 50%);
        const [r, g, b] = getColor(canvas, 0, 0);

        expect(r).toBe(255);
        expect(g).toBe(0);
        expect(b).toBe(192);
    });

    it('should draw gold color used in the demo', () => {
        paint(canvas, 280);

        // rgb(255, 213, 0) / hsl(50, 100%, 50%);
        const [r, g, b] = getColor(canvas, 275, 27);

        expect(r).toBe(255);
        expect(g).toBe(213);
        expect(b).toBe(0);
    });
})

const getColor = (canvas, x, y) => canvas.getContext('2d').getImageData(x, y, 1, 1).data;
