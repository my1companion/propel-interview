<template>
	<div class="row mt-5 section rounded p-3">
		<div class="d-flex">
			<h6 class="">Work Info</h6>
			<a class="btn bg-dark text-white ms-auto p-0 rounded-3 p-1" v-if="!editting" v-on:click="edit">
				<small>
					<font-awesome-icon icon="fa-solid fa-pencil" />
					Edit
						
				</small>
			</a>
			
			<span class="ms-auto p-0 rounded-3 p-1" v-if="editting" v-on:click="edit">
				<small class="m-2">
					<font-awesome-icon icon="fa-solid fa-times" />
					Cancel
						
				</small>
				<a class="btn bg-dark text-white p-0 rounded-3 p-1 m-2"  v-on:click="edit">
				<small>
					<font-awesome-icon icon="fa-solid fa-circle-check" />
					Save
						
				</small>
			</a>
			
			</span>
		</div>
		<hr class="mt-1">
		<div v-if="!editting">
			<div class="row py-3">
				<info-single-component title="Employment status" description="Actively seeking opportunities"></info-single-component>
				<info-single-component title="Primary Role" description="DevOps Engineer"></info-single-component>
				<info-single-component title="Github/Portfolio" description="https://amarachi.dev"></info-single-component>
			</div>

			<div class="row py-3">
				<info-single-component title="Preferred work" description="Full-time, Contract, Remote"></info-single-component>
				<info-single-component title="Relocation abroad" description="Yes"></info-single-component>
				<info-single-component title="Years of experience" description="8 years"></info-single-component>
			</div>

			<div class="row py-3">
				<info-single-component title="Preferred salary (monthly)" description="€13,500"></info-single-component>
				<info-single-component title="Secondary roles" description="Data Engineer, Cybersecurity"></info-single-component>
				<info-single-component title="Notice period" description="3 weeks"></info-single-component>
			</div>
		</div>

		<!-- editting -->
		<div v-if="editting">
			<div class="col-md-8 m-auto">
				<form class="form">
					<div class="py-3">
						<label>Employment status</label>
						<select class="form-control border">
							<option>Actively looking for opportunity</option>
						</select>
					</div>
					<div class="py-3">
						<label>Primary Role</label>
						<select class="form-control border">
							<option>DevOps Engineer</option>
						</select>
					</div>
					<div class="py-3">
						<label>Secondary Role</label>
						<select class="form-control border">
							<option>Select up to three (3)</option>
						</select>

						<ul class="secondary-role d-block mt-2">
							<li class="bg-info m-1 px-3 rounded-1"><small>Data Engineer <font-awesome-icon icon="fa-solid fa-arrow-up"/></small></li>
							<li class="bg-info m-1 px-3 rounded"><small>Server Maintenance <font-awesome-icon icon="fa-solid fa-arrow-up"/></small></li>
							<li class="bg-info m-1 px-3 rounded"><small>Cyber Security <font-awesome-icon icon="fa-solid fa-arrow-up"/></small></li>
						</ul>
					</div>
					<div class="py-3">
						<label>Github/Portfolio</label>
						<input class="form-control" placeholder="https://amarachi.dev">
					</div>
					<div class="py-3 d-flex">
						<div class="col-md-6 p-2">
							<label>Years of Experience</label>
							<select class="form-control border">
								<option>8 Years</option>
							</select>
						</div>
						<div class="col-md-6 p-2">
							<label>Preferred salary(monthly)<span class="text-danger">*</span></label>
							<input class="form-control" placeholder="€13,500">
						</div>
					</div>
					<div class="py-3">
						<label>Preffered work</label>
						<select class="form-control border">
							<option>Select up to two</option>
						</select>

						<ul class="secondary-role d-block mt-2">
							<li class="bg-info m-1 px-3 rounded-1"><small>Contract <font-awesome-icon icon="fa-solid fa-arrow-down"/></small></li>
							<li class="bg-info m-1 px-3 rounded"><small>Remote <font-awesome-icon icon="fa-solid fa-arrow-down"/></small></li>
							<li class="bg-info m-1 px-3 rounded"><small>Full-time <font-awesome-icon icon="fa-solid fa-arrow-down"/></small></li>
						</ul>
					</div>
					<div class="py-3 d-flex">
						<div class="col-md-6 p-2">
							<label>Relocation abroad</label>
							<select class="form-control border">
								<option>Yes</option>
							</select>
						</div>
						<div class="col-md-6 p-2">
							<label>Notice period</label>
							<input class="form-control" placeholder="3 weeks">
						</div>
					</div>
				</form>

			</div>
		</div>


	</div>


</template>


<script>
	export default{
		data(){
			return{
				editting:false,
			}
		},
		methods:{
			edit(){
				this.editting = !this.editting;
			}
		}
	}
</script>

<style scoped>
	.section:hover{
		background-color: #F4F8FC;
	}
	label{
		font-weight:bold;
		display:block;		
	}
	select:focus{
		outline: none;
		border: none;
	}
	.secondary-role li{
		display: inline;
		margin: 10px;
	}

</style>