<template>
	<div class="row mt-5">
		<div class="d-flex">
			<h6 class="">Skills</h6>
			<a class="btn bg-dark text-white ms-auto p-0 rounded-3 p-1"  data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addSkill">
				<small>
					<font-awesome-icon icon="fa-solid fa-pencil" />
					Edit
						
				</small>
			</a>
			
		</div>
		<hr class="mt-1">

		<div class="row">
			<div class="py-3">
				<p><strong>Tools and Technologies</strong></p>
				<span v-for="(item in skills.toolsAndTechnologies">
					<skill-single-component :skill="item.skill" :term="item.term"></skill-single-component>
				</span>	
			</div>
			<div class="py-3">
				<p><strong>Industry Knowledge</strong></p>
				<span v-for="(item in skills.industryKnowledge">
					<skill-single-component :skill="item.skill" :term="item.term"></skill-single-component>
				</span>	
			</div>
			<div class="py-3">
				<p><strong>Interpersonal Skills</strong></p>
				<span v-for="(item in skills.interpersonalSkills">
					<skill-single-component :skill="item.skill" :rating="item.rating"></skill-single-component>
				</span>	
			</div>
		</div>

	</div>


</template>

<script>
	export default{
		data(){
			return{
			skills:{
				toolsAndTechnologies:[
					{skill:"kubernetes",term:"7 years"},
					{skill:"Jekins",term:"3 years"},
					{skill:"Ansible",term:"3 years"},
					{skill:"Terraform",term:"3 years"},
					{skill:"AWS",term:"3 years"},
					{skill:"Google Cloud",term:"8 years"},
					{skill:"Azure",term:"12 years"},
					{skill:"Prometheus",term:"3 years"},
					{skill:"Confluence",term:"3 years"},
					{skill:"Jira",term:"6 years"},
				],
				industryKnowledge:[
					{skill:"Infrastructure as Code (IaC",term:"7 years"},
					{skill:"Version Control",term:"3 years"},
					{skill:"Monitoring and Observability",term:"3 years"},
					{skill:"Cloud Computing",term:"3 years"},
					{skill:"Containerization",term:"3 years"},
					{skill:"Orchestration",term:"3 years"},
					{skill:"Agile",term:"8 years"},
					{skill:"Scripting",term:"12 years"},
					{skill:"Automation",term:"3 years"},
					{skill:"DNS Management",term:"3 years"},
					{skill:"CI/CD",term:"6 years"},
				],
				interpersonalSkills:[
					{skill:"Communication",rating:3},
					{skill:"Team Collaboration",rating:3},
					{skill:"Leadership",rating:2},
					{skill:"Problem-Solving",rating:3},
					{skill:"Adaptability",rating:2},
					{skill:"Empathy",rating:2},
					{skill:"Negotiation",rating:1},
					{skill:"Mentoring",rating:1},
					{skill:"Decision-Making",rating:3},
					{skill:"Conflict Resolution",rating:2},
					{skill:"Critical Thinking",rating:2},
				],
				}
			}
		},
		methods:{
			addSkill(){
				this.$emit('change-modal-content', "addSkill");
			}
		}
	}
</script>