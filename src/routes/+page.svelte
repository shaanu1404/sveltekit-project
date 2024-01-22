<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/shared/buttons/Button.svelte';
	import CheckIcon from '$lib/icons/CheckIcon.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Svelte Project | Home</title>
</svelte:head>

<h1 class="text-3xl text-black font-bold mb-4">All tasks</h1>

{#if data.tasks.length === 0}
	<p class="text-gray-700/70 font-light">No task available.</p>
{:else}
	<ul class="flex items-stretch flex-col">
		{#each data.tasks as task (task.id)}
			<li class="flex justify-between items-center py-3 border-b last-of-type:border-b-0">
				<div
					class="w-10"
					class:text-green-600={task.completed}
					class:text-gray-300={!task.completed}
				>
					<CheckIcon />
				</div>
				<div class="flex-1">
					<h5 class="text-lg font-medium">{task.title}</h5>
					{#if task.description}
						<p class="text-sm font-light text-gray-600">{task.description}</p>
					{/if}
				</div>
				<div>
					<form use:enhance action="?/completeTask" method="post" class="inline">
						<input type="hidden" name="id" value={task.id} />
						<input type="hidden" name="completed" value={task.completed} />
						<Button type="submit" variant="success">
							<CheckIcon slot="icon" />
							{#if task.completed}
								<span>Open</span>
							{:else}
								<span>Done</span>
							{/if}
						</Button>
					</form>

					<form use:enhance action="?/deleteTask" method="post" class="inline">
						<input type="hidden" name="id" value={task.id} />
						<Button type="submit" variant="danger">
							<CheckIcon slot="icon" />
							<span>Delete</span>
						</Button>
					</form>

					<Button variant="default">
						<CheckIcon slot="icon" />
						<span>Update</span>
					</Button>
				</div>
			</li>
		{/each}
	</ul>
{/if}
