<template>
	<div class="btn border rounded-5 m-1">
	{{skill}} 
	<span v-if="term">{{term}}</span>
	<span v-if="rating">
			<span v-for="i in rating" class="text-primary ms-1">
				<font-awesome-icon icon="fa-solid fa-star" :key="i" />
			</span>
	</span>
	</div>
</template>

<script>
	export default{
		props:{
		skill:String,
		term:String,
		rating:Number,
	},
	}

</script>