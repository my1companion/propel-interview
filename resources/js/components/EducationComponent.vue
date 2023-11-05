<template>
	<div class="row mt-5">
		<div class="d-flex">
			<h6 class="">Education</h6>
			<a class="btn bg-dark text-white ms-auto p-0 rounded-3 p-1"  data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addEducation">
				<small>
					<font-awesome-icon icon="fa-solid fa-circle-plus" />
					Add
						
				</small>
			</a>
			
		</div>
		<hr class="mt-1">

		<div v-for="(item,index) in Education">
			<education-single-component :title="item.title" :institution="item.institution" :location="item.location" :term="item.term" :description="item.description" :index=index @edit-education="editEducation"></education-single-component>
		</div>	
		
	</div>


</template>

<script>
	export default{
		data(){
			return{
			Education:[
				{
					title:"Msc. Statistics (Computational Statistics)",
					institution:"University of Ibadan",
					location:"Oyo, Nigeria",
					term:"Jan 2012 – Jul 2017",
					description: [
							'Country rep, World Statistics Olympiad, Oregon, United States',
							'Graduating thesis got published in The Sun'
						],
				},
				{
					title:"Bsc. Mathematics (Actuarial Science)",
					institution:"University of Ibadan",
					location:"Oyo, Nigeria",
					term:"Jan 2012 – Jul 2017",
					description: [
							'Country rep, World Statistics Olympiad, Oregon, United States',
							'Graduating thesis got published in The Sun'
						],
				},
				]
			}
		},
		methods:{
			addEducation(){
				this.$emit('change-modal-content', "addEducation");
			},
			editEducation(){
				this.$emit('change-modal-content', "editEducation");
			}

		}

	}
</script>