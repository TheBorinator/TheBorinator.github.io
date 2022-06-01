<script>
	let advertURL = null;
	function getURL() {
		navigator.clipboard.readText()
		.then(text => {
			const result = JSON.parse(text)
			advertURL = result.addebug_videoId
		})
		.catch(err => {
			advertURL = 'Error'
		});
	} 
</script>

<svelte:head>
	<title>TB Shitposting Tools</title>
</svelte:head>

<div class="nav">
	<h1 class="title">TB Shitposting Tools</h1>
</div>

<div class="spacer" />

<div class="tools">
	<div class="tool">
		<h3>YouTube advert from debug info</h3>
		<div class="spacer" />
		<button on:click={getURL}>Get advert URL from clipboard</button>
		{#if advertURL !== null}
			<br>
			{#if advertURL !== 'Error'}
				<a href="http://youtu.be/{advertURL}/" target="_blank">
					<p>http://youtu.be/{advertURL}</p>
				</a>
			{:else}
				<p>Error: invalid debug info</p>
				<p class="helper">To get the debug info, right click on the video and click 'Copy debug info'</p>
			{/if}
		{/if}
	</div>
	<div class="tool"><h3>I'll make some more soon</h3></div>
	<div class="tool"><h3>I'll make some more soon</h3></div>
</div>