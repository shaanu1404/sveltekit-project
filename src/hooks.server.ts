import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "$lib/db"
import { type Handle } from "@sveltejs/kit"
import { AUTH_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private'
import { sequence } from "@sveltejs/kit/hooks"

export const handle: Handle = sequence(
    SvelteKitAuth({
        adapter: PrismaAdapter(db),
        secret: AUTH_SECRET,
        providers: [
            GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET })
        ],
        trustHost: true,
    }),
)