import { Rect } from './rect'

describe('getters', () => {
	const r = new Rect(0, 25, 50, 100);
	test('size', () => expect(r.size).toStrictEqual([50, 100]));
	test('right', () => expect(r.right).toBe(50));
	test('bottom', () => expect(r.bottom).toBe(125));
	test('centerX', () => expect(r.centerX).toBe(25));
	test('centerY', () => expect(r.centerY).toBe(75));
	test('topLeft', () => expect(r.topLeft).toStrictEqual([0, 25]));
	test('bottomRight', () => expect(r.bottomRight).toStrictEqual([50, 125]));
	test('center', () => expect(r.center).toStrictEqual([25, 75]));
});

describe('setters', () => {
	const r = new Rect(1, 2, 3, 4);
	test('left was set by constructor', () => expect(r.left).toBe(1));
	test('top was set by constructor', () => expect(r.top).toBe(2));
	test('width was set by constructor', () => expect(r.width).toBe(3));
	test('height was set by constructor', () => expect(r.height).toBe(4));
	test('size', () => {
		const r = new Rect(0, 0, 100, 100);
		r.size = [1, 2];
		expect(r.width).toBe(1);
		expect(r.height).toBe(2);
	});
	test('top left', () => {
		const r = new Rect(0, 0, 100, 50);
		r.topLeft = [100, 600];
		expect(r.left).toBe(100);
		expect(r.top).toBe(600);
	});
	test('bottom right', () => {
		const r = new Rect(0, 0, 100, 50);
		r.right = 150;
		expect(r.left).toBe(50);
		r.bottom = 125;
		expect(r.top).toBe(75);
		r.bottomRight = [50, 50];
		expect(r.left).toBe(-50);
		expect(r.top).toBe(0);
	});
	test('center', () => {
		const r = new Rect(0, 0, 100, 50);
		r.centerX = 200
		expect(r.left).toBe(150);
		r.centerY = 50;
		expect(r.top).toBe(25);
		r.center = [50, 0];
		expect(r.left).toBe(0);
		expect(r.top).toBe(-25);
	});
});
