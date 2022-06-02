<script>
	import Spacer from '../lib/Spacer.svelte';
</script>

<svelte:head>
	<title>TB Shitposting Tools</title>
	<meta name="title" content="TB Shitposting Tools">
	<meta name="description" content="A collection of tools designed to make shitposting more streamlined.">

	<meta property="og:type" content="website">
	<meta name="og:site_name" content="TB Shitposting Tools">
	<meta property="og:url" content="https://theborinator.github.io/">
	<meta property="og:title" content="TB Shitposting Tools">
	<meta property="og:description" content="A collection of tools designed to make shitposting more streamlined.">
	<meta property="og:image" content="./cover.png">

	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://theborinator.github.io/">
	<meta property="twitter:title" content="TB Shitposting Tools">
	<meta property="twitter:description" content="A collection of tools designed to make shitposting more streamlined.">
	<meta property="twitter:image" content="./cover.png">

	<meta name="google-site-verification" content="FUQK_q9RkI64X8M4i6G9uZ_rL3vjdcLsz9QXm-Qzjcc" />
</svelte:head>

<slot></slot>

<Spacer />

<div class="footer">
	<p class="helper">If you notice something is wrong with anything make an <a href="https://github.com/TheBorinator/TheBorinator.github.io/issues/new" target="_blank">issue</a> (or a <a href="https://github.com/TheBorinator/TheBorinator.github.io" target="_blank">pull request</a> if you're feeling brave).</p>
</div>