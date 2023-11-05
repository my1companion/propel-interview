<template>
	<div class="row mt-5">
		<div class="d-flex">
			<h6 class="">Work Experience</h6>
			<a class="btn bg-dark text-white ms-auto p-0 rounded-3 p-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addExperience">
				<small>
					<font-awesome-icon icon="fa-solid fa-circle-plus" />
					Add
						
				</small>
			</a>
			
		</div>
		<hr class="mt-1">

		<div v-for="(item,index) in workExperience">
			<work-experience-single-component :jobTitle="item.jobTitle" :company="item.company" :location="item.location" :term="item.term" :description="item.description" :index=index @edit-experience="editExperience"></work-experience-single-component>
		</div>	
		
	</div>


</template>

<script>
	export default{
		data(){
			return{
			workExperience:[
				{
					jobTitle:"Senior Software Engineer, Growth",
					company:"Speedaf Nigeria",
					location:"Lagos, Nigeria",
					term:"jan 2021 – Present",
					description: [
					'Extracted, analyzed, and interpreted data on key metrics, into meaningful and actional information using MS Excel, R and SQL to be proactive and give insight into nationwide stations backlogs, efficiency and overall business performance.',
					'Collaborated with various stakeholders to develop and implement various KPIs and SLAs to improve overall business performance.',
					'Extracted, analyzed, and interpreted data on key metrics, into meaningful and actional information using MS Excel, R and SQL to be proactive and give insight into nationwide stations backlogs, efficiency and overall business performance.',
					'Collaborated with various stakeholders to develop and implement various KPIs and SLAs to improve overall business performance.'
					],
				},
				{
					jobTitle:"Software Engineer II, Mobile",
					company:"First Bank",
					location:"Lagos, Nigeria",
					term:"jan 2021 – Present",
					description: [
					'Extracted, analyzed, and interpreted data on key metrics, into meaningful and actional information using MS Excel, R and SQL to be proactive and give insight into nationwide stations backlogs, efficiency and overall business performance.',
					'Collaborated with various stakeholders to develop and implement various KPIs and SLAs to improve overall business performance.',
					'Extracted, analyzed, and interpreted data on key metrics, into meaningful and actional information using MS Excel, R and SQL to be proactive and give insight into nationwide stations backlogs, efficiency and overall business performance.',
					'Collaborated with various stakeholders to develop and implement various KPIs and SLAs to improve overall business performance.'
					],
				},
				{
					jobTitle:"Quality Assurance Engineer",
					company:"Paystack",
					location:"Lagos, Nigeria",
					term:"jan 2021 – Present",
					description: [
					'Extracted, analyzed, and interpreted data on key metrics, into meaningful and actional information using MS Excel, R and SQL to be proactive and give insight into nationwide stations backlogs, efficiency and overall business performance.',
					'Collaborated with various stakeholders to develop and implement various KPIs and SLAs to improve overall business performance.',
					'Extracted, analyzed, and interpreted data on key metrics, into meaningful and actional information using MS Excel, R and SQL to be proactive and give insight into nationwide stations backlogs, efficiency and overall business performance.',
					'Collaborated with various stakeholders to develop and implement various KPIs and SLAs to improve overall business performance.'
					],
				}
			],
			jobDescription:[
					'Extracted, analyzed, and interpreted data on key metrics, into meaningful and actional information using MS Excel, R and SQL to be proactive and give insight into nationwide stations backlogs, efficiency and overall business performance.',
					'Collaborated with various stakeholders to develop and implement various KPIs and SLAs to improve overall business performance.',
					'Extracted, analyzed, and interpreted data on key metrics, into meaningful and actional information using MS Excel, R and SQL to be proactive and give insight into nationwide stations backlogs, efficiency and overall business performance.',
					'Collaborated with various stakeholders to develop and implement various KPIs and SLAs to improve overall business performance.'
					]
			}
		},
		methods:{
			addExperience(){
				this.$emit('change-modal-content', "addExperience");
			},
			editExperience(){
				this.$emit('change-modal-content', "editExperience");
			}
		}
	}
</script>