import { Rect } from './rect'

const r = new Rect(0, 25, 50, 100);

test('Check right is the correct value', () => expect(r.right).toBe(50));
