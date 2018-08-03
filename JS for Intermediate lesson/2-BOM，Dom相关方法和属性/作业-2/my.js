function getPos(obj){



			var pos = {left: 0, top: 0};

			while(obj){



				pos.left += obj.offsetLeft;

				pos.top += obj.offsetTop;

				obj = obj.offsetParent;

			}



			return pos;



		}


function getClass(parent, tagName, className) {



			var aEls = parent.getElementsByTagName(tagName);

			var arr = [];



			for(var i=0; i<aEls.length; i++) {

				var aClassName = aEls[i].className.split(' ');

				for(var j=0; j<aClassName.length; j++){

					if(aClassName[j] == className){

						arr.push(aEls[i]);

						break;

					}

				}

			}

			return arr;

		}

function getChecked(form, name){

			var arr = [];

			for(var i=0; i<form[name].length; i++){

				if(form[name][i].checked){

					arr.push(form[name][i].value);

				}

			}

			if(form[name][0].type == 'radio'){

				return arr[0];

			}

		if(form[name][0].type == 'checkbox'){

				return arr;

			}

}

