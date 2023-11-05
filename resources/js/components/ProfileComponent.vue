<template>
	<div class="container" style="margin-top:130px">
		<div class="row justify-content-end">
			<div class="col-md-10">
				<div class="d-flex">
					<h2>User Profile</h2>
					<a class="btn border ms-auto p-2">
						Preview Talent Profile 
						<font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
					</a>
					
				</div>
				<hr class="mt-0">
				<div>
					<a href="#">Home</a> 
					<span class="ms-2"> <font-awesome-icon icon="fa-solid fa-circle-arrow-right" /> </span>
					<span> User Profile</span>

				</div>

				<modal-component :content="modalContent"></modal-component>

				<div class="row d-flex mt-5">
					<div class="col-md-9">
						<div class="d-flex">
							<div class="d-flex align-items-center p-2">
								<a href="#" class="text-decoration-none align-self-end">
	        						<img src="https://github.com/mdo.png" alt="mdo" width="75" height="75" class="rounded-circle">
	    						</a>
	    					</div>
	    					<div>
								<h1 class="display-6">Beth Amarachi</h1>
								<strong>DevOps Engineer</strong> • <span> Member • Senior Level •</span> <a href="#">52 claimed perks</a>
							</div>

						</div>
						<hr>
						<!-- Personal Info  -->
						<personal-info-component> </personal-info-component>	
						
						<!-- Work Info  -->
						<work-info-component> </work-info-component>	

						<!-- Work Experience  -->
						<work-experience-component @change-modal-content="changeModalContent"> </work-experience-component>	

						<!-- Education  -->
						<education-component @change-modal-content="changeModalContent"> </education-component>	

						<!-- Skills  -->
						<skills-component @change-modal-content="changeModalContent"> </skills-component>	

						<!-- Past Project  -->
						<past-project-component @change-modal-content="changeModalContent"> </past-project-component>	

					</div>
					<div class="col-md-3">
						<div class="bg-light rounded-3">
							<div class="bg-info rounded-top p-3 d-flex" style="background-image:url('https://img.freepik.com/free-photo/liquid-marbling-paint-texture-background-fluid-painting-abstract-texture-intensive-color-mix-wallpaper_1258-82940.jpg')">
								<div class="text-white">
									<span>Member of</span><br>
									<h6>Girls Can Code</h6>
								</div>
								<div class="ms-auto">
									<span class="h4 border rounded-circle p-1 bg-white" style="color:purple"><font-awesome-icon icon="fa-solid fa-star" /></span>
								</div>
							</div>
							<div class="p-3 dropend">
								<strong class="dropdown-toggle"> Visit Community Wall</strong>
							</div>

						</div>

						<resume-component></resume-component>

						<pending-task-component></pending-task-component>


						<!-- Helpful Resources -->
						<div class="bg-info mt-5 rounded-3 p-2">
							<div class="rounded-top p-1 d-flex">
								<div class="">
									<strong>Helpful Resources</strong><br>
									<span>Learn how to get the best from the Propel platform.</span>
								</div>
							</div>
							<div class="p-1 dropend">
								<small><strong class="dropdown-toggle"> Visit blog</strong></small>
							</div>

						</div>


					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				modalContent:"",
			}
		},
		methods:{
			changeModalContent(content){
				console.log(content);
				this.modalContent = content;
			}
		}
	}
</script>
