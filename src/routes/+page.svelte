<script lang="ts">
	import { Canvas, Square } from '$lib/canvas'
	import { gradient } from '$lib/utils'
</script>

<Canvas width={800} height={800}>
	{#each Array(10) as _, col}
		{#each Array(10) as _, row}
			{@const size = 800 / 10}
			{@const x = col * size}
			{@const y = row * size}
			{@const fillStyle = gradient(col, row)}
			<Square {x} {y} {size} {fillStyle} strokeStyle="#000" />
		{/each}
	{/each}
</Canvas>
