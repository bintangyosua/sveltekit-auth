<script lang="ts">
	let { data } = $props();
</script>

<h4>Hi{data.email ? ', ' + data.email : ''}!</h4>

<p>Welcome to Minuet Corp, a warm and friendly company. We are glad that you are here.</p>

<hr />

<details open>
	<summary>Baruch Spinoza</summary>
	<p>
		“The highest activity a human being can attain is learning for understanding, because to
		understand is to be free.”
	</p>
</details>

<details open>
	<summary>Immanuel Kant</summary>
	<p>
		“Act in such a way that you treat humanity, whether in your own person or in the person of any
		other, never merely as a means to an end, but always at the same time as an end.”
	</p>
</details>

<details open>
	<summary>Bertrand Russell</summary>
	<p>
		“There are two motives for reading a book; one, that you enjoy it; the other, that you can boast
		about it.”
	</p>
</details>
