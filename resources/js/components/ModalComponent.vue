<template>

	<!-- Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog modal-dialog-scrollable modal-lg">
	    <div class="modal-content" v-if="content=='addExperience'">
	    	<add-experience-modal-content></add-experience-modal-content>
	    </div>
	    <div class="modal-content" v-if="content=='editExperience'">
	    	<edit-experience-modal-content></edit-experience-modal-content>
	    </div>
	    <div class="modal-content" v-if="content=='addEducation'">
	    	<add-education-modal-content></add-education-modal-content>
	    </div>
	    <div class="modal-content" v-if="content=='editEducation'">
	    	<edit-education-modal-content></edit-education-modal-content>
	    </div>
	    <div class="modal-content" v-if="content=='addProject'">
	    	<add-project-modal-content></add-project-modal-content>
	    </div>
	    <div class="modal-content" v-if="content=='editProject'">
	    	<edit-project-modal-content></edit-project-modal-content>
	    </div>
	    <div class="modal-content" v-if="content=='addSkill'">
	    	<add-skill-modal-content></add-skill-modal-content>
	    </div>

	  </div>
	</div>
</template>

<script>
	export default{
		props:{
			content:String,
			},
	}
</script>