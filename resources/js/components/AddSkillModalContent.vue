<template>
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Add Skills</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <ul class="bg-light list-group list-group-horizontal p-1 text-center">
      <li class="list-group-item bg-light rounded"><font-awesome-icon icon="fa-solid fa-computer"/> Tools & Technologies</li>
      <li class="list-group-item bg-light rounded"><font-awesome-icon icon="fa-solid fa-vault"/> Industry Knowledge</li>
      <li class="list-group-item bg-light rounded"><font-awesome-icon icon="fa-solid fa-users"/> Interpersonal Skills</li>
    </ul>
    <div class="d-flex pt-3 ps-3">
      <div class="w-75">
        <strong><small>skill</small></strong>
      </div>
      <div class="w-25">
        <strong><small>Years of experience</small></strong>
      </div>
    </div>
    <hr class="m-0">
    <form>
      <div class="d-flex pt-3 ps-3">
        <div class="w-75 p-2">
          <select class="form-control">
              <option>Add skill</option>
          </select> 
        </div>
        <div class="w-25 p-2 d-flex">
          <select class="form-control">
              <option>Select year</option>
          </select> 
          <font-awesome-icon icon="fa-solid fa-trash" class=" ms-5 m-2" />

        </div>
      </div>
      <div class="d-flex pt-3 ps-3">
        <div class="w-75 p-2">
          <select class="form-control">
              <option>Kubernetes</option>
          </select> 
        </div>
        <div class="w-25 p-2 d-flex">
          <select class="form-control">
              <option>Select year</option>
          </select> 
          <font-awesome-icon icon="fa-solid fa-trash" class=" ms-5 m-2" />

        </div>
      </div>
      <div class="d-flex pt-3 ps-3">
        <div class="w-75 p-2">
          <select class="form-control">
              <option>Jekins</option>
          </select> 
        </div>
        <div class="w-25 p-2 d-flex">
          <select class="form-control">
              <option>Select year</option>
          </select> 
          <font-awesome-icon icon="fa-solid fa-trash" class=" ms-5 m-2" />

        </div>
      </div>
      <div class="d-flex pt-3 ps-3">
        <div class="w-75 p-2">
          <select class="form-control">
              <option>Ansible</option>
          </select> 
        </div>
        <div class="w-25 p-2 d-flex">
          <select class="form-control">
              <option>Select year</option>
          </select> 
          <font-awesome-icon icon="fa-solid fa-trash" class=" ms-5 m-2" />

        </div>
      </div>
      <div class="d-flex pt-3 ps-3">
        <div class="w-75 p-2">
          <select class="form-control">
              <option>Terraform</option>
          </select> 
        </div>
        <div class="w-25 p-2 d-flex">
          <select class="form-control">
              <option>Select year</option>
          </select> 
          <font-awesome-icon icon="fa-solid fa-trash" class=" ms-5 m-2" />

        </div>
      </div>
      <div class="d-flex pt-3 ps-3">
        <div class="w-75 p-2">
          <select class="form-control">
              <option>Confluence</option>
          </select> 
        </div>
        <div class="w-25 p-2 d-flex">
          <select class="form-control">
              <option>Select year</option>
          </select> 
          <font-awesome-icon icon="fa-solid fa-trash" class=" ms-5 m-2" />

        </div>
      </div>
      <div class="d-flex pt-3 ps-3">
        <div class="w-75 p-2">
          <select class="form-control">
              <option>AWS</option>
          </select> 
        </div>
        <div class="w-25 p-2 d-flex">
          <select class="form-control">
              <option>Select year</option>
          </select> 
          <font-awesome-icon icon="fa-solid fa-trash" class=" ms-5 m-2" />

        </div>
      </div>
      <div class="d-flex pt-3 ps-3">
        <div class="w-75 p-2">
          <select class="form-control">
              <option>Add skill</option>
          </select> 
        </div>
        <div class="w-25 p-2 d-flex">
          <select class="form-control">
              <option>Select year</option>
          </select> 
          <font-awesome-icon icon="fa-solid fa-trash" class=" ms-5 m-2" />

        </div>
      </div>
      <div class="d-flex pt-3 ps-3">
        <div class="w-75 p-2">
          <select class="form-control">
              <option>Add skill</option>
          </select> 
        </div>
        <div class="w-25 p-2 d-flex">
          <select class="form-control">
              <option>Select year</option>
          </select> 
          <font-awesome-icon icon="fa-solid fa-trash" class=" ms-5 m-2" />

        </div>
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

<style scoped>
    li{
      width: 33%;
      border: none;
    }
    li:hover{
      background-color:#000000 !important;
      color: #ffffff;
    }
    .w-75{
      width:60% !important;
    }
    .w-25{
      width:30% !important;
    }
</style>