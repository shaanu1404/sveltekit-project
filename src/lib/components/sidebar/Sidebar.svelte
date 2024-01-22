<script lang="ts">
	import appState from '$lib/stores/appStateStore';
	import NavItem from './NavItem.svelte';
	import { pageTitles } from '$lib/utils/getPageTitle';

	$: routes = [['/', 'Tasks List'], ...Object.entries(pageTitles)];
</script>

<aside
	class="w-[336px] fixed left-0 inset-y-0 z-[100] flex flex-col bg-white shadow-lg px-6 transition-all"
	class:left-[-336px]={!$appState.isSidebarOpen}
>
	<div class="py-4 border-b border-b-gray-100">
		<a href="/" class="flex items-center">
			<img src="/among_us.png" class="w-12 h-12 object-contain" alt="Logo" />
			<h5 class="text-black text-lg font-bold flex-1">Us Everywhere</h5>
			<button
				class="w-6 h-6 rounded-fullinline-flex items-center justify-center"
				on:click={appState.toggleSidebar}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-4 h-4"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
				</svg>
			</button>
		</a>
	</div>
	<nav class="flex-1">
		<ul class="overflow-y-auto">
			{#each routes as [href, title] (href)}
				<NavItem {href} {title} />
			{/each}
		</ul>
	</nav>
</aside>

{#if $appState.isSidebarOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="fixed inset-0 bg-black/40 z-[99]"
		aria-hidden="true"
		on:click={appState.toggleSidebar}
	></div>
{/if}
