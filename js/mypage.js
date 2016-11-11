window.onload=function(){
	var oGuide=document.getElementById("guide");
	var oBtn=oGuide.getElementsByTagName("div");
	var pome=document.getElementById("pome");
	var me=document.getElementById("me");
	var book=document.getElementById("book");
	var music=document.getElementById("music");
	oBtn[0].style.background="rgba(255,255,255,0.5)";
	oBtn[0].style.color="#917858";
	function rese(){
		for(var i=0;i<oBtn.length;i++){
			if(i==2){
				continue;
			}
			oBtn[i].style.color="white";
			oBtn[i].style.background="none";
		}
	}
	function disp(){
		pome.style.display="none";
		me.style.display="none";
		book.style.display="none";
		music.style.display="none";
	}
	oBtn[0].onclick=function(){
		rese();
		disp();
		me.style.display="block";
		this.style.background="rgba(255,255,255,0.5)";
		this.style.color="#917858";	
	};
	oBtn[1].onclick=function(){
		disp();
		pome.style.display="block";
		rese();
		this.style.background="rgba(255,255,255,0.5)";
		this.style.color="#917858";
	};
	oBtn[3].onclick=function(){
		rese();
		disp();
		music.style.display="block";
		this.style.background="rgba(255,255,255,0.5)";
		this.style.color="#917858";
	};
	oBtn[4].onclick=function(){
		disp();
		book.style.display="block";
		rese();
		this.style.background="rgba(255,255,255,0.5)";
		this.style.color="#917858";
	};
};