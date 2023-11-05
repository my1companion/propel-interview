<template>
	<div class="row mt-5">
		<div class="d-flex">
			<h6 class="">Past Projects</h6>
			<a class="btn bg-dark text-white ms-auto p-0 rounded-3 p-1"  data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addProject">
				<small>
					<font-awesome-icon icon="fa-solid fa-circle-plus" />
					Add
						
				</small>
			</a>
			
		</div>
		<hr class="mt-1">
		<div class="row">
			<div class="col-md-6 my-3" v-for="(item,index) in pastProject">
				<past-project-single-component :imgUrl="item.imgUrl" :title="item.title" :description="item.description" :index="index" @edit-project="editProject"></past-project-single-component>
			</div>	
		</div>
	</div>


</template>

<script>
	export default{
		data(){
			return{
			pastProject:[
				{
					imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gD40cnCDY25HnCM0qAf-39912uEqTUNdYA&usqp=CAU",
					title:"Creating a public health dashboard",
					description: "Elevating e-commerce with seamless checkout redesign for enhanced user experience",
				},
				{
					imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-_BysHQ93dzy5XgtxWOXTxWFWLx5thhKdg&usqp=CAU",
					title:"Admin software for schools",
					description: "Elevating e-commerce with seamless checkout redesign for enhanced user experience",
				},
				{
					imgUrl:"https://www.shutterstock.com/image-illustration/stock-market-chart-260nw-252511228.jpg",
					title:"Stock market bot tracker",
					description: "Elevating e-commerce with seamless checkout redesign for enhanced user experience",
				},
				{
					imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuGsi_IAn_J9_C4-Yjh-xhIoyE5WP4BYsNA&usqp=CAU",
					title:"Optimizing crop yield in Plateau",
					description: "Elevating e-commerce with seamless checkout redesign for enhanced user experience",
				},
				{
					imgUrl:"https://www.securitymagazine.com/ext/resources/business-1845350_1920.jpg?1617027944		",
					title:"Supply chain logging tool",
					description: "Elevating e-commerce with seamless checkout redesign for enhanced user experience",
				},
				{
					imgUrl:"https://i.guim.co.uk/img/media/42c1689f2e97196bfead1fd93dcc3cf626442b7b/0_73_5200_3121/master/5200.jpg?width=465&dpr=1&s=none",
					title:"Managing pills for senior citizens",
					description: "Elevating e-commerce with seamless checkout redesign for enhanced user experience",
				},
				]
			}
		},
		methods:{
			addProject(){
				this.$emit('change-modal-content', "addProject");
			},
			editProject(){
				this.$emit('change-modal-content', "editProject");
			}
		}

	}
</script>