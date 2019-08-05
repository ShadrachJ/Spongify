$(document).ready(function(){
    $('#puppies').css('display','block');
	$('.sidenav a').on('click',function(){
    
 	 var id =  this.id;
     switch(id) {
  	case "puppyLink":
        console.log('puppy');
        $('.main div').css('display','none');
        $('#puppies').css('display','block');
		closeNav();
    break;
  	case "parentLink":
    	console.log('parent');
        $('.main div').css('display','none');
        $('#parents').css('display','block');
		closeNav();
    break;
    case "contactLink":
    	console.log('contact');
        $('.main div').css('display','none');
        $('#contact').css('display','block');
		closeNav();
    break;
    case "aboutLink":
    	console.log('about');
        $('.main div').css('display','none');
        $('#about').css('display','block');
		closeNav();
    break;
  default:
    	console.log('not listed');
}
	});

});
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
