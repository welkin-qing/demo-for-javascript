
function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }


//对象、方向、回调函数
		function shake ( obj, attr, endFn ) {



			if( obj.shaked ) { return; }

			var pos = parseInt( getStyle(obj, attr) );			// 有隐患的

			

			var arr = [];			// 20, -20, 18, -18 ..... 0

			var num = 0;

				

			for ( var i=20; i>0; i-=2 ) {

				arr.push( i, -i );

			}

			arr.push(0);



			obj.shaked = true;		

			clearInterval( obj.shake );

			obj.shake = setInterval(function (){

				obj.style[attr] = pos + arr[num] + 'px';

				num++;

				if ( num === arr.length ) {

					clearInterval( obj.shake );

					obj.shaked = false;

					endFn && endFn();



				}

			}, 5);

		}


//对象，方向，距离，步长，频率，回调函数
		function move(obj, attr, distance, step, frequency, endFn) {

			if(obj.moved) return;

			var startVal = parseInt(getStyle(obj, attr));

			var times = 0;

			obj.moved = true;

			step = distance > 0 ? step : -step;

			clearInterval(obj.move);

			obj.move = setInterval(function(){

				obj.style[attr] = parseInt(getStyle(obj, attr)) + step + 'px';

				times ++;

				if(Math.abs(step * times) > Math.abs(distance)) {

					clearInterval(obj.move);

					obj.style[attr] = startVal + distance + 'px';

					obj.moved = false;

					endFn && endFn();

				}



			}, frequency);

		}