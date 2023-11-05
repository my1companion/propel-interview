<template>
		<div class="project">
			<div class="d-flex flex-row-reverse d-none">
				<div class="position-absolute mt-3">
					<span class="rounded-circle bg-white p-2" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editProject"><font-awesome-icon icon="fa-solid fa-pencil" class="text-primary" /></span>
					<span class="rounded-circle bg-white p-2"><font-awesome-icon icon="fa-solid fa-trash" class="text-danger" /></span>
				</div>
			</div>
			<img :src="imgUrl" class="rounded-top w-100" style="height:120px; object-fit:cover">
		</div>
		<div class="p-1 border rounded-bottom">
			<p class="m-1"><strong>{{ title }}</strong></p>
			<p class="m-1">{{ description }}</p>
			<a href="#" class="text-decoration-none">View Project</a>
		</div>

</template>

<script>
	export default{
		props:{
		imgUrl:String,
		title:String,
		description:String,
		index:Number,
	},
	methods:{
		editProject(){
			this.$emit('edit-project', this.index);
		}
	}
	}

</script>

<style scoped>
	.align-item-end{
		float:right !important;
	}
	.project:hover .flex-row-reverse{
		display:flex !important;
	}

</style>