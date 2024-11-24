<script lang="ts">
	import { type Snippet } from 'svelte'
	import { SvelteSet } from 'svelte/reactivity'
	import { setCanvasContext } from './context'

	type Props = { width: number; height: number; children?: Snippet }
	type Draw = (ctx: CanvasRenderingContext2D) => void

	let { width, height, children }: Props = $props()
	let canvas: HTMLCanvasElement
	let items = new SvelteSet<Draw>()

	setCanvasContext({ addItem })

	function addItem(draw: Draw) {
		$effect(() => {
			items.add(draw)
			// runs when destroyed
			return () => items.delete(draw)
		})
	}

	$effect(() => {
		const ctx = canvas.getContext('2d')!
		ctx.clearRect(0, 0, width, height)
		items.forEach((draw) => draw(ctx))
	})
</script>

<canvas bind:this={canvas} {width} {height}>
	{@render children?.()}
</canvas>

<style>
	canvas {
		background-color: #222;
	}
</style>
