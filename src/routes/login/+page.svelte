<form method="POST" action="?/login">
	<fieldset>
		<label>
			Email
			<input name="email" type="email" placeholder="Email" required />
		</label>
		<label>
			Password
			<input type="password" name="password" placeholder="Password" required />
		</label>
	</fieldset>

	<input type="submit" value="Login" />
</form>

<style>
	form {
		padding: 0 100px;
	}

	@media (max-width: 1400px) {
		form {
			padding: 0 50px;
		}
	}

	@media (max-width: 1200px) {
		form {
			padding: 0 0px;
		}
	}

	@media (max-width: 1000px) {
		form {
			padding: 0 0;
		}
	}
</style>
