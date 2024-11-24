import { setContext, getContext } from 'svelte'

type Draw = (ctx: CanvasRenderingContext2D) => void
type Canvas = { addItem: (draw: Draw) => void }

const canvasKey = Symbol('canvas')

export function setCanvasContext(context: Canvas) {
	setContext(canvasKey, context)
}

export function getCanvasContext(): Canvas {
	return getContext(canvasKey) as Canvas
}
