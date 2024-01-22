<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<a {href} class="text-sm text-gray-700 inline-flex items-center space-x-1">
	<slot name="icon" />
	<span>{title}</span>
</a>
