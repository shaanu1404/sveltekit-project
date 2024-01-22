<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import IconLink from '$lib/components/shared/links/IconLink.svelte';
	import LinkIcon from '$lib/icons/LinkIcon.svelte';
	import HelpIcon from '$lib/icons/HelpIcon.svelte';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	import UserIcon from '$lib/icons/UserIcon.svelte';
	import appState from '$lib/stores/appStateStore';

	export let pageTitle = '';
</script>

<header class="py-3 mb-4 border-b border-gray-200/20">
	<nav class="flex items-center justify-between">
		<div class="flex items-center space-x-3">
			<button on:click={appState.toggleSidebar}>
				<MenuIcon />
			</button>
			{#if pageTitle && !!$page.data.session}
				<a href="/" class="text-lg">{pageTitle}</a>
			{/if}
		</div>

		<ul class="flex items-center space-x-3">
			<li class="">
				<IconLink href="/contacts" title="Connect with us">
					<LinkIcon slot="icon" />
				</IconLink>
			</li>
			<li>
				<IconLink href="/help-and-support" title="Help & Support">
					<HelpIcon slot="icon" />
				</IconLink>
			</li>
			{#if $page.data.session}
				<li>
					<button
						on:click={() => signOut()}
						class="text-sm text-gray-700 inline-flex items-center space-x-1"
					>
						{#if $page.data.session.user?.image}
							<span
								style="background-image: url('{$page.data.session.user.image}')"
								class="w-6 h-6 object-cover rounded-full"
							/>
						{/if}
						<span>{$page.data.session.user?.name ?? 'Signout'}</span>
					</button>
				</li>
			{:else}
				<li>
					<button
						on:click={() => signIn('github')}
						class="text-sm text-gray-700 inline-flex items-center space-x-1"
					>
						<UserIcon /> <span>Signin</span>
					</button>
				</li>
			{/if}
		</ul>
	</nav>
</header>
