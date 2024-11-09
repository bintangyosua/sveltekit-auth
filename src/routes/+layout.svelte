<script lang="ts">
	export let data;
</script>

<div class="container">
	<nav>
		<ul>
			<li><a href="/"><h3>Minuet Corp</h3></a></li>
		</ul>
		<ul>
			{#if data && data.email}
				<li>
					<span class="email">{data.email}</span>
					<a data-sveltekit-reload href="/logout"><button>Logout</button></a>
				</li>
			{:else}
				<li><a href="/login"><button>Login</button></a></li>
			{/if}
		</ul>
	</nav>

	<slot />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		padding: 0 200px;
	}

	.email {
		margin-right: 30px;
	}

	@media (max-width: 1200px) {
		.container {
			padding: 0 100px;
		}
	}

	@media (max-width: 768px) {
		.container {
			padding: 0 50px;
		}
	}

	@media (max-width: 480px) {
		.container {
			padding: 0 20px;
		}
	}
</style>
