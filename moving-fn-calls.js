
function MyClass() {
  console.log("constructing MyClass");
  this.id = {
    value: "foo"
  };
  
  this.lastFormData = "failure";
  
}

MyClass.prototype.validate = function() {
  console.log("validating");
  this.lastFormData = "awesome";
  return Math.random() > 0.5;
}

MyClass.prototype._setErrors = function(errors) {
  console.log("setting errors");
}

MyClass.prototype._updateReport = function(){
    // button click to update report.
    var args = {
        aid: this.id.value
    };

    var errors = this.validate(), data = this.lastFormData;

    if(this._setErrors(errors)){
        return;
    }
    
    console.log(data);
    
    console.log("done updating");
};


var m = new MyClass();
m._updateReport();
