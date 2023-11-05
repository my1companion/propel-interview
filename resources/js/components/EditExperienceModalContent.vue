<template>
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Edit Work Experience</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <form>
      <div class="mb-3">
        <label for="jobTitle" class="col-form-label">Job title</label>
        <input type="text" class="form-control" placeholder="E.g; Senior DevOps Engineer" value="Senior Software Engineer, Growth" id="jobTitle">
      </div>
      <div class="mb-3">
        <label for="recipient-name" class="col-form-label">Company name</label>
        <input type="text" class="form-control" placeholder="E.g; Paystack" value="Speedaf Nigeria">
      </div>
      <div class="mb-3">
        <label for="recipient-name" class="col-form-label">Job title:</label>
        <input type="text" class="form-control" placeholder="E.g; Senior DevOps Engineer" value="https://www.speedaf.com/ng-en">
      </div>  
		  <div class="mb-3 d-flex">
		<div class="col-md-6 p-2">
			<label>Location</label>
			<select class="form-control border">
				<option>Nigeria</option>
			</select>
		</div>
		<div class="col-md-6 p-2">
			<label></label>
			<select class="form-control border">
				<option>Lagos</option>
			</select>
		</div>
	  </div>
		  <div class="mb-3">
			  <div class="d-flex">
			<div class="col-md-6 p-2">
				<div class="p-1 w-50 d-inline-block">
					<label>Start date</label>
					<select class="border form-control">
						<option>Jan</option>
					</select>
				</div>
				<div class="p-1 w-50 d-inline-block">
					<label></label>
					<select class="form-control border">
						<option>2021</option>
					</select>
				</div>
			</div>
			<div class="col-md-6 p-2">
				<div class="p-1 w-50 d-inline-block">
					<label>End date</label>
					<select class="border form-control">
						<option>Month</option>
					</select>
				</div>
				<div class="p-1 w-50 d-inline-block">
					<label></label>
					<select class="form-control border">
						<option>Year</option>
					</select>
				</div>
			</div>
		  </div>
      <div class="px-3">
		<input type="checkbox" id="roleCheck"> <label for="roleCheck"><small>I’m currently working in this role </small></label>
	  </div>
	  </div>
      <div class="mb-3 p-3">
      	<strong><small>Accomplishments</small></strong><br>
      	<textarea class="text-justify form-control" placeholder="Include accomplishments and responsibilities for this role. Start each statement with a solid action verb; also include specific, technical words with sample data."></textarea>
      </div>
    </form>
  </div>
  <div class="modal-footer d-flex">

    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
    <div class="ms-auto">
        <button type="button" class="btn border-primary text-primary m-1">Save and add another</button>
        <button type="button" class="btn btn-primary  m-1">Save work experience</button>
    </div>
  </div>

</template>