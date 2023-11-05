<template>
	<div class="row py-3">
		<div class="col-md-12">
			<div class="card border rounded-2 p-3">
			<div class="border-start p-3 py-0">
				<div class="d-flex">
					<div>
						<p class="mb-0"><strong>{{jobTitle}}</strong></p>
						<span><a href="" class="text-dark">{{company}}</a> | {{location}} | {{term}}</span>
					</div>
					<div class="ms-auto">
						<span class="rounded-circle bg-white p-2" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editExperience">
								<font-awesome-icon icon="fa-solid fa-pencil" />
						</span>
						<span class="rounded-circle bg-white p-2"><font-awesome-icon icon="fa-solid fa-trash" /></span>


					</div>
				</div>
				<ul class="mt-3" >
					<li v-for="item in description">
						{{item}}
					</li>
				</ul>
			</div>
			</div>
		</div>
	</div>


</template>

<script>
	export default{
		props:{
		jobTitle:String,
		company:String,
		location:String,
		term:String,
		description: Array,
		index:Number
	},
	methods:{
		editExperience(){
			this.$emit('edit-experience', this.index);
		}
	}
	}

</script>

<style scoped>
	.card:hover{
		background-color: #F4F8FC;
	}
	.ms-auto{
		display:none;
	}
	.card:hover .ms-auto{
		display:block;
	}

</style>