<template>
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Edit Project</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <form>
      <div class="mb-3">
        <label for="jobTitle" class="col-form-label">Project title</label>
        <input type="text" class="form-control" placeholder="E.g; Deploying a database with Django" value="Admin software for schools" id="jobTitle">
      </div>
      <div class="mb-3">
        <label for="recipient-name" class="col-form-label">Project description (140 char)</label>
        <textarea class="form-control" placeholder="E.g; Elevating E-Commerce with Seamless Checkout Redesign for Enhanced User Experience">Elevating e-commerce with seamless checkout redesign for enhanced user experience</textarea>
      </div>
      <div class="mb-3">
        <label for="recipient-name" class="col-form-label"><strong>Project URL</strong><br>
        	Share a live link to view this project. This can be a website, a video, or any online asset.
        </label>
        <input type="text" class="form-control" placeholder="https://" value="https://lernen-admin.vercel.app">
      </div>  
      <div class="mb-3">
      	<strong><small>Cover image </small></strong>(optional)<br>
      	<label for="projectFile" class="d-block">
	      	<div class="text-justify mt-2 text-center border rounded" style="border-style:dotted !important">
	      		<span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-_BysHQ93dzy5XgtxWOXTxWFWLx5thhKdg&usqp=CAU" class="rounded-top w-100" style="height:120px; object-fit:cover">

	      		</span>
	      	</div>
      	</label>
      	<input type="file" id="projectFile" class="d-none">
      </div>
    </form>
  </div>
  <div class="modal-footer d-flex">

    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
    <div class="ms-auto">
        <button type="button" class="btn border-primary text-primary m-1">Save and add another</button>
        <button type="button" class="btn btn-primary  m-1">Save project</button>
    </div>
  </div>

</template>