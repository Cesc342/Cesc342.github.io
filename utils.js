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
       return valor * 3.6;
    }else if(unitat == "km/h" && unitatPerTransformar == "km/h"){
       return valor * 0.2777777777777778;
    }else if((unitat == "j" || unitat == "J" || unitat == "joules" || unitat == "joule" || unitat == "Joules" || unitat == "Joule") && unitatPerTransformar == "cal"){
      return valor * 0.2388458966275;
    }else if(unitat == "cal" && unitatPerTransformar == (unitat == "J" || unitat == "joules" || unitat == "joule" || unitat == "Joules" || unitat == "Joule")){
      return valor * 4.1868;
    }else if(unitat == "€" && unitatPerTransformar == "$"){
      return unitat * 1.12;
    }else if(unitat == "$" && unitatPerTransformar == "€"){
      return unitat * 0.89;
    }else{
      console.error("No s'ha trobat la maner de convertir la tava unitat");
    }
  }
}
