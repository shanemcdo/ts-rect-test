class Rect {
	top: number;
	left: number;
	width: number;
	height: number;

	constructor(top: number, left: number, width: number, height: number) {
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

	get topLeft(): [number, number] {
		return [this.left, this.height];
	}

	set topLeft([left, height]: [number, number]) {
		this.left = left;
		this.height = height;
	}
}
