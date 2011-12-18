// window.close() anywhere
(function(nativeClose){
	this.close = function(){
		var w = this.open('', '_self', '');
		nativeClose.call(w)
	}
}).call(window, window.close)