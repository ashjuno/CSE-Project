
// Resume script

      var urlVariables = window.location.search;

      var urlParameters = new URLSearchParams ( urlVariables );

      var name = urlParameters.get ('name');
      var email = urlParameters.get ('email');
      var phone = urlParameters.get ('phone');
      var age = urlParameters.get ('age');
      var workExp = urlParameters.get ('workExp')
      var volExp = urlParameters.get ('volExp')
      var highschool = urlParameters.get ('highschool');
      var college = urlParameters.get ('college');

      if (name != null && email != null && phone != null && age != null &&  highschool != null && college != null && workExp != null)
      {
 
        var n = document.getElementById ("name")
        n.innerHTML = name;

        var e = document.getElementById ("email");
        e.innerHTML = email;

        var p = document.getElementById ("phone");
        p.innerHTML = phone;

        var w = document.getElementById ("workExp");
        w.innerHTML = workExp;

        var v = document.getElementById ("volExp");
        v.innerHTML = volExp;

        var a = document.getElementById ("age");
        a.innerHTML = age  + " years of giving my time to this rock we live on";

        var h = document.getElementById ("highschool");
        h.innerHTML = highschool;

        var c = document.getElementById ("college");
        c.innerHTML = college;
        
      }
    
      var obj = "To have as much fun as possible"

      var chance = Math.floor( Math.random() * 5);

      if(chance == 1){

        obj = "Does it matter..."}

      if(chance == 2){

        obj = "I'm just tryin to get paid..."}

      if(chance == 3){

        obj = "To gain as much meaningful experience as possible."}

      if(chance == 4){

        obj = "To use my passion to make a difference in the world. "}

        var para = document.getElementById ("obj");

        para.innerHTML =  obj 
    
      var edu = "Youtube Master"

      var echance = Math.floor( Math.random() * 5);

      if(echance == 1){

        edu= "Master's at Harvard University"}


      if(echance == 2){

        edu = "PHD from Clown School University"}

      if(echance == 3){

        edu = "Self-Taught"}

      if(echance == 4){

        edu= "Bachelor from MIT"}

        var e = document.getElementById ("edu");

        e.innerHTML =  edu
    
      var work = "Secretary at Nvidia"

      var wchance = Math.floor( Math.random() * 5);

      if(wchance == 1){

        work = "CEO of Google"}


      if(wchance == 2){

        work = "Master Chef"}

      if(wchance == 3){

        work = "Dean of Clown School University"}

      if(wchance == 4){

        work= "Professional Couch Sitter"}

        var w = document.getElementById ("work");

        w.innerHTML =  work
    
      var vol = "Walking puppies"

      var vchance = Math.floor( Math.random() * 5);

      if(vchance == 1){

        vol = "Retirement Homes"}

      if(vchance == 2){

        vol = "Watching my pok??mon at the Pok??mon Daycare"}

      if(vchance == 3){

        vol = "Babysitting my cousin"}

      if(vchance == 4){

        vol= "Giving Judge Judy my free time"}

        var v = document.getElementById ("vol");

        v.innerHTML =  vol 
