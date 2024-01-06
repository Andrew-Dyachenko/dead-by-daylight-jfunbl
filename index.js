document.addEventListener('DOMContentLoaded', () => {
	const canvas = document.getElementById('dbd-logo');
	canvas.width = 400;
	canvas.height = 300;
	const ctx = canvas.getContext('2d');

	const totalLines = 5;
	const lineWidth = 100;
	const tailLength = 20; // длина хвостиков
	const animationDuration = 1000;

	function drawLine(index, color, startY, endY) {
		ctx.beginPath();
		ctx.moveTo(50 + index * lineWidth, startY);
		ctx.lineTo(50 + index * lineWidth, endY);
		ctx.strokeStyle = color;
		ctx.lineWidth = 10;
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
		ctx.stroke();
		ctx.closePath();
	}

	function drawDiagonalLine(color, startX, startY, endX, endY, tailLength) {
		ctx.beginPath();
		ctx.moveTo(startX - tailLength, startY);
		ctx.lineTo(endX + tailLength, endY);
		ctx.strokeStyle = color;
		ctx.lineWidth = 10;
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
		ctx.stroke();
		ctx.closePath();
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < totalLines - 1; i++) {
		drawLine(i, '#A9A9A9', 50, 250);
	}

	drawDiagonalLine('#A9A9A9', 50, 50, 350, 250, tailLength);
});
