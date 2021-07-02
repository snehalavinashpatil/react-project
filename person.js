module.exports = function (fname,lname){
    this.firstname = fname;
    this.lastname = lname;
    this.fullname = function(){
        return this.firstname +' '+ this.lastname;
    }
}