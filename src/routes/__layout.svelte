<script>
	import Spacer from '../lib/Spacer.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="TB Shitposting Tools"
	titleTemplate="%s | TBST"
	description="A collection of tools designed to make shitposting more streamlined."
	canonical="https://theborinator.github.io/"
	openGraph={{
		url: 'https://theborinator.github.io/',
		title: 'TB Shitposting Tools',
		description: 'A collection of tools designed to make shitposting more streamlined.',
		images: [
		{
			url: 'https://theborinator.github.io/cover.png',
			width: 640,
			height: 360,
			alt: 'TB Shitposting Tools Cover'
		}
	],
	site_name: 'TB Shitposting Tools'
	}}
/>

<svelte:head>
	<title>TB Shitposting Tools</title>
	<meta name="google-site-verification" content="FUQK_q9RkI64X8M4i6G9uZ_rL3vjdcLsz9QXm-Qzjcc" />
</svelte:head>

<slot></slot>

<Spacer />

<div class="footer">
	<p class="helper">If you notice something is wrong with anything make an <a href="https://github.com/TheBorinator/TheBorinator.github.io/issues/new" target="_blank">issue</a> (or a <a href="https://github.com/TheBorinator/TheBorinator.github.io" target="_blank">pull request</a> if you're feeling brave).</p>
</div>