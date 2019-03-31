const Math = new function(){
this.M = Math;
this.ep = function(g,h,m){
return g*h*m;
}
this.ec = function(v,m){
return ((1/2)*m) * (v*v);
}
this.c = new function(){
this.num = 299792458;
this.unitat = "km/s";
}
}
