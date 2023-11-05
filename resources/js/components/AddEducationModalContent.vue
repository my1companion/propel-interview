<template>
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Add Education</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <form>
      <div class="mb-3">
        <label for="jobTitle" class="col-form-label">School</label>
        <input type="text" class="form-control" placeholder="E.g; Covenant University" id="jobTitle">
      </div>
      <div class="mb-3">
        <label for="recipient-name" class="col-form-label">Degree</label>
        <input type="text" class="form-control" placeholder="E.g; BSc.">
      </div>
      <div class="mb-3">
        <label for="recipient-name" class="col-form-label">Field of study</label>
        <input type="text" class="form-control" placeholder="E.g; Mass Communications">
      </div>  
		  <div class="mb-3 d-flex">
		<div class="col-md-6 p-2">
			<label>Location (optional)</label>
			<select class="form-control border">
				<option>Country</option>
			</select>
		</div>
		<div class="col-md-6 p-2">
			<label></label>
			<select class="form-control border">
				<option>State</option>
			</select>
		</div>
	  </div>
		  <div class="mb-3">
			  <div class="d-flex">
			<div class="col-md-6 p-2">
				<div class="p-1 w-50 d-inline-block">
					<label>Start date</label>
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
        <button type="button" class="btn btn-primary  m-1">Save education</button>
    </div>
  </div>

</template>