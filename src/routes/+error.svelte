<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="text-center">
	<h1 class="text-6xl font-semibold text-black mb-4">{$page.status}</h1>
	<p class="text-lg text-gray-800">{$page.error?.message}</p>
	<p class="text-gray-500 text-sm">Return to <a class="text-blue-500" href="/">Home</a></p>
</div>
