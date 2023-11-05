<template>
	<div class="col-md-4 py-2		">
		<strong>{{title}}</strong>
		<p>{{description}}</p>
	</div>
</template>

<script>
	export default{
		props:{
		title:String,
		description:String,
	},
	}

</script>