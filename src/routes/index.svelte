<script>
	import Tool from '../lib/Tool.svelte';
	import Tools from '../lib/Tools.svelte';
	import Spacer from '../lib/Spacer.svelte';
	let advertURL = null;
	function getURL() {
		navigator.clipboard.readText()
		.then(text => {
			const result = JSON.parse(text);
			advertURL = result.addebug_videoId;
		})
		.catch(err => {
			advertURL = 'Error'
		});
	} 
</script>

<div class="nav">
	<h1 class="title">TB Shitposting Tools</h1>
</div>

<Spacer />

<Tools>
	<Tool category="Tool">
		<h3>YouTube advert from debug info</h3>
		<Spacer />
		<button on:click={getURL}>Get advert URL from clipboard</button>
		{#if advertURL !== null}
			<br>
			{#if advertURL !== 'Error'}
				{#if advertURL == undefined}
					<p>It looks like you didn't get an advert on the video you linked.</p>
					<p class="helper">Make sure you get the debug info while the advert is playing.</p>
				{:else}
					<a href="http://youtu.be/{advertURL}/" target="_blank">
						<p>http://youtu.be/{advertURL}</p>
					</a>
				{/if}
			{:else}
				<p>Invalid debug info</p>
				<p class="helper">To get the debug info, right click on the video and click 'Copy debug info'</p>
			{/if}
		{/if}
	</Tool>
	<Tool category="Music">
		<h3>Royalty free music that isn't crap</h3>
		<div class="spacer" />
		<a href="http://freemusicarchive.org/home" target="_blank">Free Music Archive</a>
		<br>
		<a href="http://www.pond5.com/free/music" target="_blank">Pond5 Free Music</a>
		<br>
		<a href="https://www.pond5.com/search?kw=&media=music&type=free" target="_blank">Pond5 Public Domain Music</a>
		<br>
		<a href="https://bandcamp.com/tag/creative-commons" target="_blank">Bandcamp Creative Commons</a>
		<br>
		<a href="https://wordpress.org/openverse/search/audio/" target="_blank">Openverse Audio Search</a>
		<br>
		<a href="http://dig.ccmixter.org/free" target="_blank">CCMixter</a>
		<br>
		<a href="https://soundcloud.com/search/sounds?q&filter.license=to_share" target="_blank">SoundCloud CC Search</a>
		<br>
		<a href="https://www.europeana.eu/en/search?page=1&qf=TYPE%3A%22SOUND%22&query=%22%22%20AND%20RIGHTS%3A%2Acreative%2A" target="_blank">Europeana CC Search</a>
	</Tool>
	<Tool category="Placeholder"><h3>I'll make some more soon</h3></Tool>
</Tools>