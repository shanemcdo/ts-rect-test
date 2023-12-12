export class Rect {
	left: number;
	top: number;
	width: number;
	height: number;

	constructor(left: number, top: number, width: number, height: number) {
		this.top = top;
		this.left = left;
		this.width = width;
		this.height = height;
	}

	get size(): [number, number] {
		return [this.width, this.height];
	}

	set size([width, height]: [number, number]) {
		this.width = width;
		this.height = height;
	}

	get right(): number {
		return this.left + this.width;
	}
	
	set right(right: number) {
		this.left = right - this.width;
	}

	get bottom(): number {
		return this.top + this.height;
	}

	set bottom(bottom: number) {
		this.top = bottom - this.height;
	}

	get centerX(): number {
		return this.left + this.width / 2;
	}

	set centerX(center: number) {
		this.left = center - this.width / 2;
	}

	get centerY(): number {
		return this.top + this.width / 2
	}

	set centerY(center: number) {
		this.top = center - this.width / 2;
	}

	get topLeft(): [number, number] {
		return [this.left, this.top];
	}

	set topLeft(topLeft: [number, number]) {
		[this.left, this.top] = topLeft;
	}

	get bottomRight(): [number, number] {
		return [this.right, this.bottom];
	}

	set bottomRight(bottomRight: [number, number]) {
		[this.right, this.bottom] = bottomRight;
	}

	get center(): [number, number] {
		return [this.centerX, this.centerY];
	}

	set center(center: [number, number]) {
		[this.centerX, this.centerY] = center;
	}
}
