<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export let variant: 'success' | 'danger' | 'default' = 'success';
	export let disabled: boolean = false;
	export let type: HTMLButtonAttributes['type'] = 'button';

	$: buttonClasses =
		variant === 'success'
			? 'bg-green-50 hover:bg-green-600/20'
			: variant === 'danger'
				? 'bg-red-50 hover:bg-red-600/20'
				: 'bg-blue-50 hover:bg-blue-600/20';
</script>

<button
	{type}
	on:click
	class={`inline-flex items-center space-x-2 px-3 py-2 rounded-md text-sm cursor-pointer ${buttonClasses} ${
		disabled ? 'text-gray-300 bg-gray-100 hover:bg-gray-100 cursor-default' : ''
	}`}
	{disabled}
>
	<span
		class={!disabled
			? variant === 'success'
				? 'text-green-600'
				: variant === 'danger'
					? 'text-red-600'
					: 'text-blue-600'
			: 'text-gray-300'}
	>
		<slot name="icon" />
	</span>
	<slot />
</button>
