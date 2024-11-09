import type { PageServerLoad } from '../$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
	cookies.delete('email', { path: '/' });

	throw redirect(302, '/login');
};
