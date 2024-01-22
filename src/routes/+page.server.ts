import db from '$lib/db';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
    const tasks = await db.task.findMany()
    return {
        tasks
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    completeTask: async ({ request }) => {
        const formData = await request.formData()
        const id = formData.get('id'), completed = formData.get('completed')
        if (!id) return fail(404, { message: 'Invalid task id' })
        await db.task.update({
            where: { id: +id },
            data: { completed: completed !== 'true' }
        })
        return { message: 'Changed status' }
    },
    deleteTask: async ({ request }) => {
        const id = (await request.formData()).get('id')
        if (!id) return fail(404, { message: 'Invalid task id' })
        await db.task.delete({ where: { id: +id } })
        return { message: 'Task deleted' }
    }
}