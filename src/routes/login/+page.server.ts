import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	login: async ({ cookies, request }) => {
		const user = await request.formData();

		if (user.get('email') && user.get('password')) {
			cookies.set('email', user.get('email') as string, { path: '/' });
			redirect(302, '/');
		}
	}
} satisfies Actions;
