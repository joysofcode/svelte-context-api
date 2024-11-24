function getRandomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const RANDOM_HUE = getRandomNumber(0, 360)

export function gradient(col: number, row: number) {
	const GRID_SIZE = 10
	const MIN_LIGHTNESS = 10
	const MAX_LIGHTNESS = 100

	// calculate normalized values for row and column
	const normalizedRow = (GRID_SIZE - 1 - row) / (GRID_SIZE - 1) // inverted row index (0 to 1)
	const normalizedCol = col / (GRID_SIZE - 1) // normalized column index (0 to 1)

	// calculate lightness based on both row and column indices
	const light = Math.round(normalizedRow * (MAX_LIGHTNESS - MIN_LIGHTNESS) + MIN_LIGHTNESS)

	// adjust lightness further based on the column index to create a gradient effect
	const lightness = Math.round(normalizedCol * (MAX_LIGHTNESS - light) + light)

	// perceived lightness
	const chroma = 0.4

	// color's hue angle
	const hue = RANDOM_HUE

	return `oklch(${lightness}% ${chroma} ${hue})`
}
