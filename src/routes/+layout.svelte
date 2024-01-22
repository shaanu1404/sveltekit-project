<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/shared/Navbar.svelte';
	import { getPageTitle } from '$lib/utils/getPageTitle';
	import Unauthorized from '$lib/components/Unauthorized.svelte';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
</script>

<main class="container mx-auto font-body">
	<Navbar pageTitle={getPageTitle($page.route.id)} />
	{#if $page.data.session}
		<slot />
	{:else}
		<Unauthorized />
	{/if}
</main>

{#if $page.data.session}
	<Sidebar />
{/if}
