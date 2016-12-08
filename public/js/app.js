"use strict"
class App{
	constructor(){
		this.media = [
			{	
				"id":0,
				"img" : "http://img00.deviantart.net/6fa6/i/2013/238/3/f/let_s_go_to_work_by_deadslug-d6jrtjw.jpg",
				"artist" : "DeadSlug",
				"genre": "action",
				"description": "Let's go to work",
				"rating":4,
				"price":1500,
			},
			{
				"id":1,
				"img" : "http://artgerm.com/wp-content/uploads/2016/02/Kiki.jpg",
				"artist" : "Artgerm",
				"genre": "fantasy",
				"description": "Kiki",
				"rating":5,
				"price":2000,
			},
			{
				"id":2,
				"img" : "http://orig01.deviantart.net/afb4/f/2016/313/9/d/warframe___space_mom_by_thedurrrrian-dantluo.jpg",
				"artist" : "theDurrrian",
				"genre": "fantasy",
				"description": "Warframe - Space mom",
				"rating": 3,
				"price":1300,
			},
			{
				"id":3,
				"img" : "http://img11.deviantart.net/6d17/i/2015/309/3/8/run_or_die_by_kawacy-d9fogl9.jpg",
				"artist" : "Kawacy",
				"genre": "fantasy",
				"description": "Run or Die",
				"rating": 3,
				"price":1300,
			},
			{
				"id":4,
				"img" : "https://cdna0.artstation.com/p/assets/images/images/004/174/964/large/peter-xiao-354.jpg?1481051082",
				"artist" : "Peter Xiao",
				"genre": "fantasy",
				"description": "Moana",
				"rating": 3,
				"price":1400,
			},
			{
				"id":5,
				"img" : "https://cdnb3.artstation.com/p/assets/images/images/004/162/303/large/daeho-cha-.jpg?1480953269",
				"artist" : "Daeho Cha",
				"genre": "fantasy",
				"description": "Goddess",
				"rating":5,
				"price":1600,
			},
			{
				"id":6,
				"img" : "https://cdna0.artstation.com/p/assets/images/images/004/145/552/large/peter-xiao-351.jpg?1480776553",
				"artist" : "Peter Xiao",
				"genre": "fantasy",
				"description": "Xiuxiu",
				"rating":3,
				"price":1200,
			},
			{
				"id":7,
				"img" : "https://cdna2.artstation.com/p/assets/images/images/003/394/110/large/chengwei-pan-10.jpg?1473236745",
				"artist" : "Chengwei Pan",
				"genre": "Character",
				"description": "Owl Spirit",
				"rating":5,
				"price":3000,
			},
			{
				"id":8,
				"img" : "https://cdnb1.artstation.com/p/assets/images/images/004/094/833/large/lloyd-hoshide-mariobros.jpg?1480313445",
				"artist" : "Lloyd Hoshide",
				"genre": "horror",
				"description": "Super Mario Bros!",
				"rating":3,
				"price":1200,
			},
			{
				"id":9,
				"img" : "https://cdna2.artstation.com/p/assets/images/images/004/150/838/large/petr-passek-legend.jpg?1480840123",
				"artist" : "Petr Passek",
				"genre": "action",
				"description": "Fun art",
				"rating":5,
				"price":1700,
			},
			{
				"id":10,
				"img" : "https://cdna2.artstation.com/p/assets/images/images/003/033/794/large/ignatius-tan-mercyupload.jpg?1468784367",
				"artist" : "Ignatius Tan",
				"genre": "Character",
				"description": "Mercy",
				"rating":5,
				"price":2300,
			},
			{
				"id":11,
				"img" : "https://cdnb1.artstation.com/p/assets/images/images/003/690/973/large/sergey-kolesov-corvo-crop01.jpg?1476466853",
				"artist" : "Sergey Kolesov",
				"genre": "action",
				"description": "Corvo",
				"rating":3,
				"price":1600,
			},
		];
		this.cart =[

		];
	}
	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

}
class Component extends App{
	constructor(){

		super();
	}
	homepage(){
		$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
		
		let html =`
		<div id="nav" class="nav" role="navigation">
			<div class="nav-wrapper container">
				<ul>
					<li class=" "><a href="#back" onclick="component.Landing()">HOME</a></li>
					<li><a href="#printpage" onclick="component.Prints()">PRINTS</a></li>
					<li><a href="#cartpage" onclick="component.Cart()"> CART</a></li>
					<li><a href="#addPage" onclick="component.AddPage()">ADD</a></li>
				</ul>
			</div>
		</div>

		<div id="back">
			<div id="backtext">
				<h2>WELCOME TO PRINT CITY</h2>
				<p>We sell prints from artist all around the globe<br>
					<a class="waves-effect waves-light btn #212121 grey darken-4" href="#apppage">Start</a></p>

				</div>
			</div>
			<div id="apppage">
				<div class="hrdark"></div>
				<div class="row" id="feat">
					<div class="col s12">
						<h1>FEATURE PRINTS</h1>
					</div>

					<div id="latestprints">
						<div class="row">
							`;

							for(let i=0, count=0;i < this.media.length; i++){

							if(this.media[i].rating>3){
							html+=`		
							<div id="hot" class="col s6 m6">
								<div class="card">
									<div class="card-image">
										<a href="#printpage" onclick="component.PrintPage(${i})">
											<img src="${this.media[i].img}">
											<span class="card-title"></span>
										</a>
									</div>
								</div>
							</div>	
							`
							count= count+1;					
							if(count==8){
							break;
						}
					}
				}
				html+=`
			</div>
		</div>
	</div>					
</div>
<div id="printpage">					

</div>	
<div id="editpage">

</div>
<div id="cartpage">
	<br>

	<div class="row container">	
	<div class="col s6">	
		<h3>Your Cart</h3>
	</div>

		<div class="col s12">
			<table id="cartable" class="bordered">
				<thead>
					<tr>
						<th>Title</th>
						<th>Artist</th>
						<th>Price</th>
						
					</tr>
				<tbody id="added">				

				</tbody>
				</thead>
			</table>
		</div>
			
	</div>

</div>	
<div id="addPage">
</div>			
</div>
<br>
<br>
<div id="print">
	<div class="titleback">
		<div class="container">
			<h4>HOTTEST PRINTS</h4>
		</div>
	</div>							
	<div id="latestprints">
		<div class="row">
			`;
			for(let i=0, count=0;i < this.media.length; i++){
			if(this.media[i].rating==5){
			html+=`		
			<div id="hot" class="col s12 m6">
				<div class="card">
					<div class="card-image">
						<a href="#printpage" onclick="component.PrintPage(${i})">
							<img src="${this.media[i].img}">
							<span class="card-title"></span>
						</a>
					</div>
				</div>
			</div>						
			`
			count= count+1;
			;
			if(count==2){
			break;
		}
	}									
}								
html+=`								
</div>								
</div>
<div id="featureprints">
	<div class="titleback">
		<div class="container">
			<h4>RECENT PRINTS</h4>
		</div>
	</div>
	<div id="latestprints">
		<div class="row">
			`;
			let c=this.media;
			let count=0;
			for(let i=(c.length-1);i>=0;i--){
			if(count++ === 4)break;
			html+=`		
			<div class="col s12 m3">

				<div class="card">
					<div class="card-image">
						<a href="#printpage" onclick="component.PrintPage(${i})">
							<img src="${this.media[i].img}">
						</a>
					</div>
				</div>
			</div>											
			`;
		}								
		html+=`								
	</div>
</div>
</div>
<div class="titleback">
	<div class="container">
		<div class="row">
			<div class="col s6">
				<h4>All PRINTS</h4>
			</div>
			<div class="col s6">
				<div id ="search" class="input-field col s6">
        		  <input  id="printSearch" type="text" class="validate" onkeyup="component.AllPrints(this.value)">
       			   <label for="printSearch">Search Prints Here....</label>
       			 </div>
			</div> 
		</div>

	</div>
</div>

<div id="allPrints">
	
</div>
</div>

</div>


<footer id="foot" class="page-footer #212121 grey darken-4">
	<div class="container">
		<div class="row">
			<div class="col l6 s12">
				<h5 class="white-text">Print City</h5>
				<p class="grey-text text-lighten-4">We Sell Artist Prints all Around the globe</p>
			</div>
			<div class="col l4 offset-l2 s12">
				<h5 class="white-text"></h5>
				<ul>
					
					<li><a class="grey-text text-lighten-3" href="facebook.com"></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="footer-copyright">
		<div class="container">
			© 2016 Copyright 
			
		</div>
	</div>
</footer>
							`;
							
		this.reRender(`${html}`,document.getElementById("app"))
		$('#apppage').show();
		$('#back').show();
		$('#print').hide();
		$('#printpage').hide();
		$('#cartpage').hide();
		$('#editpage').hide();
		$('#addPage').hide();

	}
	AddPage(){
	console.log("add");
	 $(document).ready(function() {
    $('select').material_select();
  	});
	 let i = this.media.length;
		let html=`
			<br>
			<div class="container">
				<h3>ADD PAGE</h3>
				<div class="row">
					<div class="input-field col s6">
			         <input id="addid" disabled value="${i}" type="text" class="validate">
			         <label for="addid"></label>
			        </div>
					<div class="input-field col s6">
			         <input id="addtitle" type="text" class="validate">
			         <label for="addtitle">Title</label>
			        </div>
			        <div class="input-field col s6">
			         <input id="addartist" type="text" class="validate">
			         <label for="addartist">Artist</label>
			        </div>
			        <div class="input-field col s6">
			         <input id="addgenre" type="text" class="validate">
			         <label for="addgenre">Genre</label>
			        </div>
			        <div class="input-field col s6">
			         <input id="addprice" type="text" class="validate">
			         <label for="addprice">Price</label>
			        </div>
			        <div class="input-field col s6">
					    <select id="addrate">
					      <option value="" disabled selected></option>
					      <option value="1">1 Meh</option>
					      <option value="2">2 Okay</option>
					      <option value="3">3 Good</option>
					      <option value="4">4 Great</option>
					      <option value="5">5 Excelent</option>
					    </select>
					    <label>Select Rating</label>
					</div>
			        <div class="input-field col s12">
			         <input id="addimage" type="text" class="validate">
			         <label for="addimage">Image</label>
			        </div>
			        <div class="col s6">
			        <a class="waves-effect waves-light btn" onclick="component.AddPrint()">Add</a>
			        </div>
			        </div>
				</div>
			</div>

		`;
		this.reRender(`${html}`,document.getElementById("addPage"))
		$('#apppage').hide();
		$('#back').hide();
		$('#print').hide();
		$('#printpage').hide();
		$('#cartpage').hide();
		$('#editpage').hide();
		$('#addPage').show();
	}
	AddPrint(){
		let id = document.getElementById('addid');
		let title = document.getElementById('addtitle');
		let artist = document.getElementById('addartist');
		let genre = document.getElementById('addgenre');
		let price = document.getElementById('addprice');
		let image = document.getElementById('addimage');
		let rate = document.getElementById('addrate');

		let prints={
		"id":id.value,
		"img":image.value,
		"artist":artist.value,
		"genre":genre.value,
		"description":title.value,
		"rating":rate.value,
		"price":price.value,
	};		
		this.media.push(prints);

		console.log(prints);
		component.Refresh();

	}
	Landing(){
		
		$('#apppage').show();
		$('#back').show();
		$('#print').hide();
		$('#printpage').hide();
		$('#cartpage').hide();
		$('#editpage').hide();
		$('#addPage').hide();
	}
	AllPrints(key){
		 let printSearch = document.getElementById("printSearch");
    let listPiano = document.getElementById("allPrints");
  
    let html = `
<div id="latestprints">
		<div class="row">
    `;
    for(let i=0;i<this.media.length;i++){
      if(this.media[i].description.toLowerCase().includes(printSearch.value)||this.media[i].artist.toLowerCase().includes(printSearch.value)||this.media[i].artist.toUpperCase().includes(printSearch.value)||this.media[i].description.toUpperCase().includes(printSearch.value)||this.media[i].artist.includes(printSearch.value)||this.media[i].description.includes(printSearch.value)){
        html += `
        	<div id="addlist" class="col s12 m3">
								<div class="card">
									<div class="card-image">
										<a href="#printpage" onclick="component.PrintPage(${i})">
											<img src="${this.media[i].img}">
											<span class="card-title">${this.media[i].description}</span>
										</a>
									</div>
								</div>
			</div>	
        `;
      }
    }
    html+=`
    </div>
    </div>
    `;
    listPiano.innerHTML = html;
	}
	Prints(){
		component.AllPrints();
		$('#apppage').hide();
		$('#back').hide();
		$('#print').show();
		$('#printpage').hide();
		$('#cartpage').hide();
		$('#editpage').hide();
		$('#addPage').hide();
	}
	PrintPage(key){
		let i=key;
		let id=this.media[i].id;
		console.log("printpage");
		let html=`
		<br>
		<div id="printpageprint" class="container">
		<h1>${this.media[i].description}</h1>
		<img src="${this.media[i].img}">
		</div>
		
		<div id ="descriptions" class="row container" >
			<hr>
			<div id ="thumbnail" class ="col s6">
			<img src="${this.media[i].img}">
			</div>
			<div class ="col s6">
			<h3>Title: ${this.media[i].description}</h3>
			<h5>Artist: ${this.media[i].artist}</h5>
			<h5>Genre: ${this.media[i].genre}</h5>
			<h5>Rating: ${this.media[i].rating}</h5>
			<br>
			<div class="row">
			<div class="col s4">
			<a href="#" class="waves-effect waves-light btn #00e676 green accent-3" onclick="component.Edit(${id})">Edit</a>
 			 </div>
 			 <div class="col s6">
 			 
 			 <a href="#" class="waves-effect waves-light btn #212121 grey darken-4" onclick="component.CartAdd(${id})">Add Cart</a>

			
 			 
 			 </div>

 			 </div>
			</div>
		</div>
		
		`;
		this.reRender(`${html}`,document.getElementById("printpage"))
		$('#apppage').hide();
		$('#back').hide();
		$('#print').hide();
		$('#printpage').show();
		$('#cartpage').hide();
		$('#editpage').hide();
		$('#addPage').hide();
	}
	Cart(){
		this.Cartaddlist();
		$('#apppage').hide();
		$('#back').hide();
		$('#print').hide();
		$('#printpage').hide();
		$('#cartpage').show();
		$('#editpage').hide();
		$('#addPage').hide();
	}
	Cartaddlist(num){
		let id =num;
		let html=``;

			for(let i =0; i<this.cart.length;i++){
				html+=`
					<tr>
						<td>${this.cart[i].Title}</td>
						<td>${this.cart[i].Artist}</td>
						<td>${this.cart[i].Price}</td>
						<td class="center-align"><a class="waves-effect waves-light btn #e53935 red darken-1" onclick="component.Delete(${i})">Delete</a></td>
					</tr>
				`;

			}
		
		
		this.reRender(`${html}`,document.getElementById("added"))

		$('#apppage').hide();
		$('#back').hide();
		$('#print').hide();
		$('#printpage').hide();
		$('#cartpage').show();
		$('#editpage').hide();
		$('#addPage').hide();	
	}
	CartAdd(key){
		let i =key;	
		let shopcart = {"Title":this.media[i].description,"Artist":this.media[i].artist,"Price":this.media[i].price};
		this.cart.push(shopcart);
		Materialize.toast('Item Added', 4000);
		console.log(shopcart);
		component.Cartaddlist(i);
		$('#apppage').hide();
		$('#back').hide();
		$('#print').hide();
		$('#printpage').hide();
		$('#cartpage').show();
		$('#editpage').hide();
		$('#addPage').hide();	

	}
	Delete(key){
		let table = document.getElementById('added');
		table.deleteRow(key);
   		this.cart.splice(key,1);
		this.Cart();
		Materialize.toast('Item Deleted', 4000);

	}
	Edit(key){
	 $(document).ready(function() {
    $('select').material_select();
      });
		let html=`
		<div class="container">
		<div class="row">
			<div class="col s6">
				<h1>Edit</h1>				
			</div>
			<br>
			<div class="col s6 right-align">
			<p>you're currently editing:</p> <h5>${this.media[(key)].description}</h5>
			</div>
		</div>
		<div class="row">
		<form class="col s12">
		<div class="input-field col s12">
          <input disabled value="${this.media[(key)].id}" id="idedit" type="text" class="validate">
          <label for="idedit"></label>
        </div>
        <div class="input-field col s6">
          <input id="titleedit" type="text" class="validate" value="${this.media[(key)].description}">
          <label for="titleedit">Title</label>
        </div>
        <div class="input-field col s6">
          <input id="artistedit" type="text" class="validate" value="${this.media[(key)].artist}">
          <label for="artistedit">Artist Name</label>
        </div>
        <div class="input-field col s6">
          <input id="genreedit" type="text" class="validate" value="${this.media[(key)].genre}">
          <label for="genreedit">Genre</label>
        </div>
        <div class="input-field col s6">
          <input id="priceedit" type="text" class="validate" value="${this.media[(key)].price}">
          <label for="priceedit">Price</label>
        </div>
        <div class="input-field col s6">
		    <select id="editrate" value="${this.media[(key)].rating}">
		      <option value="${this.media[(key)].rating}" disabled selected>${this.media[(key)].rating}</option>
		      <option value="1">1 Meh</option>
		      <option value="2">2 Okay</option>
		      <option value="3">3 Good</option>
		      <option value="4">4 Great</option>
		      <option value="5">5 Excelent</option>
		    </select>
		    <label>Select Rating</label>
		</div>
        <div class="input-field col s12">
          <input id="imgedit" type="text" class="validate" value="${this.media[(key)].img}">
          <label for="imgedt">Image</label>

        </div>
        </form>


 		
 		<div class="col s6">
 			<a onclick ="component.Editpush(${(key)})" class="waves-effect waves-light btn #76ff03 light-green accent-3">Update</a>
 			<a onclick ="component.PrintPage(${(key)})" class="waves-effect waves-light btn #e53935 red darken-1">Back</a>
 		</div>
        </div>
          
        </div>
		`;

		this.reRender(`${html}`,document.getElementById("editpage"))
		
		$('#apppage').hide();
		$('#back').hide();
		$('#print').hide();
		$('#printpage').hide();
		$('#cartpage').hide();	
		$('#editpage').show();	
		$('#addPage').hide();

	}
	Editpush(key){
		let id = document.getElementById('idedit');
		let title = document.getElementById('titleedit');
		let artist = document.getElementById('artistedit');
		let genre = document.getElementById('genreedit');
		let price = document.getElementById('priceedit');
		let image = document.getElementById('imgedit');
		let rate = document.getElementById('editrate');

		let p=this.media[key];
		let prints={"id":id.value,"img":image.value,"artist":artist.value,"genre":genre.value,"description":title.value,"rating":rate.value,"price":price.value};		
		this.media[key] = prints;
		
		Materialize.toast('Item Updated', 4000);
		$('#apppage').hide();
		$('#back').hide();
		$('#print').hide();
		$('#printpage').show();
		$('#cartpage').hide();	
		$('#editpage').hide();
		$('#addPage').hide();
		component.Refresh();
		component.PrintPage(key);
		
	}
	Refresh(){
		component.homepage();
	}
	
}
let component = new Component();
component.homepage();
component.AllPrints();
