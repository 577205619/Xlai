<script>
	var mine1;
	window.onload = function(){
	
		document.getElementsByClassName('mine-wrap')[0].style.display = "block";
	
		mine1 = new Mine("mine1",'face',30,16,99,"game-tag-images","game-time-images");
		mine1.init();
	
		var inputEle = document.getElementsByTagName('input');
	
		for (var i = 0; i < inputEle.length; i++) {
			inputEle[i].onclick = function(){
				var width,height,minenum;
				if(this.value == 0){
					width =9;height =9;minenum = 10;
				}
				else if(this.value == 1){
					width =16;height =16;minenum = 40;
				}
				else if(this.value == 2){
					width =30;height =16;minenum = 99;
				}else if(this.value ==3){
					width =prompt("请输入宽(9-30)");
					height = width && prompt("请输入高(9-24)");
					minenum = height && prompt("请输入雷的数量(10-200)");
					if(!(width && height && minenum)){
						return;
					}
					if(width<9){width = 9;}
					if(width>30){width = 30;}
					if(height<9){height = 9;}
					if(height>24){height = 24;}
					if(minenum<10){minenum = 10;}
					if(minenum>200){minenum = 200;}
					if(minenum>height * width){minenum =10;}
				}
				mine1.paneheight = height;//有几行
				mine1.panewidth = width;//有几列
				mine1.minenum = minenum;//有几个雷
	
				mine1.init();
				document.getElementsByClassName("mine-wrap")[0].style.width = width * mine1.PANE_SIZE + 25 + "px";
			}
		};
	}
</script>