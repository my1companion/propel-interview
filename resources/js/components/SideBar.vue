<template>
	<div class="d-flex flex-nowrap fixed-start sticky-top position-absolute navbar navbar-expand-lg" style="margin-top:80px" >
      <button class="p-2 text-primary border border-dark bg-white rounded d-block d-lg-none ms-1 mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">☰
      </button>

  	  <div class="offcanvas flex-column flex-shrink-0 p-3 bg-light sidebar" id="sidebarMenu" style="width: 280px; min-height:660px">
	    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
	      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
	    </a>
	    <ul class="nav nav-pills flex-column mb-auto mb-5">
	      <li class="nav-item mb-3">
	        <a href="#" class="nav-link text-dark" aria-current="page">
	          <font-awesome-icon icon="fa-solid fa-house" />
	          Home
	        </a>
	      </li>
	      <li class="nav-item mb-3">
	        <a href="#" class="nav-link link-body-emphasis">
	          <font-awesome-icon icon="fa-solid fa-briefcase" />
	          Jobs
	        </a>
	      </li>
	      <li class="nav-item mb-3">
	        <a href="#" class="nav-link link-body-emphasis">
	          <font-awesome-icon icon="fa-solid fa-bank" />
	          Financial Services
	        </a>
	      </li>
	      <li class="nav-item mb-3">
	        <a href="#" class="nav-link link-body-emphasis">
	          <font-awesome-icon icon="fa-solid fa-tag" />
	          Discounts & Deals
	        </a>
	      </li>
	      <li class="nav-item mb-3">
	        <a href="#" class="nav-link link-body-emphasis">
	          <font-awesome-icon icon="fa-solid fa-lightbulb" />
	          Opportunities
	        </a>
	      </li>
	      <li class="nav-item mb-3">
	        <a href="#" class="nav-link link-body-emphasis">
	          <font-awesome-icon icon="fa-solid fa-user-plus" />
	          Refer a Friend
	        </a>
	      </li>
	      <li class="nav-item mb-3">
	        <a href="#" class="nav-link link-body-emphasis">
	          <font-awesome-icon icon="fa-solid fa-users" />
	          Community Wall
	        </a>
	      </li>
	    </ul>

	    <div class="">
	      <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
	      	<img src="https://pbs.twimg.com/profile_images/1451108817979203591/ueRZM1vh_400x400.jpg" style="width:30px">
	        <span class="ms-3">
	        	Powered by Propel<br>
	        	<strong class="text-decoration-underline">Learn more</strong>
	        </span>
	      </a>
	    </div>
	  </div>

		
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			openNav(){

			}
		}
	}
</script>

<style scoped>
    .bg-light{
        background-color: #F9F7F5 !important;
    }
</style>