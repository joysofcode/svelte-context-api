<script lang="ts">
	import { getCanvasContext } from './context'

	type Props = { x: number; y: number; size: number; fillStyle?: string; strokeStyle?: string }

	let { x, y, size, fillStyle, strokeStyle }: Props = $props()

	getCanvasContext().addItem(draw)

	function draw(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = fillStyle ?? ''
		ctx.lineWidth = 2
		ctx.strokeStyle = strokeStyle ?? ''

		if (strokeStyle) {
			ctx.strokeRect(x, y, size, size)
		}

		if (fillStyle) {
			ctx.fillRect(x, y, size, size)
		}
	}
</script>
