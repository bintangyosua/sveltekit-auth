export function load({ cookies }) {
	const email = cookies.get('email');

	return {
		email: email ?? null
	};
}
