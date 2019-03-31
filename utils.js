const Math = new function() {
  this.M = window.Math;
  this.ec = function(m,v){
    return ((1/2)*m)*(v*v);
  }
  this.ep = function (m,g,h) {
    return g*h*m;
  }
  this.c = new function() {
    this.num = 299792458;
    this.unitat = "m/s"
  }
}
