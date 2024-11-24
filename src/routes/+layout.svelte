<script lang="ts">
	let { children } = $props()
</script>

<svelte:head>
	<title>Svelte Context API</title>
</svelte:head>

{@render children?.()}

<style>
	:global {
		@import 'open-props/style';
		@import 'open-props/normalize';
		@import 'open-props/buttons';

		:root {
			--surface-1: #1b1e28;
		}

		body {
			display: grid;
			place-content: center;
			gap: var(--size-8);
		}

		canvas {
			border-radius: var(--radius-2);
			box-shadow: var(--shadow-2);
		}
	}
</style>
