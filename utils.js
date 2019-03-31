const Math = new function() {
  this.M = window.Math;
  this.ec = function(m,v){
    return ((1/2)*m)*(v*v);
  }
  this.ep = function (m,g,h) {
    return g*h*m;
  }
  this.densitat = function(m,v){
    return m/v;
  }
  this.vel = function(d,t){
    return d/t;
  }
  this.c = new function() {
    this.num = 299792458;
    this.unitat = "m/s"
  }
  this.transform = function(valor,unitat,unitatPerTransformar){
    if(unitat == "m/s" && unitatPerTransformar == "km/h"){
       raturn valor * 3.6;
    }else if(unitat == "km/h" && unitatPerTransformar == "km/h"){
      return valor * 0.2777777777777778;
    }
  }
}
