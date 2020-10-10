
 const userList=()=>{
    fetch('https://api.queritel.com/api/test-lab/hernandez/get_user_list.php').then( (response) =>{
        return response.json();
    }).then(function (data) {
    document.getElementById('userResult').style.display = "grid";
     var wrapper = document.getElementById("user-items");
      var myHTML = '';  
      

      for (var i = 0; i < data.length; i++) {
        
        myHTML += 
        '<div >'+
                `<h2> First Name  <span>${data[i].first_name}</span> </h2>`+
        '</div>' +    
        '<div>'+ 
                `<h2>Last Name: <span> ${data[i].last_name}</span></h2>`+        
       '</div>'+
       '<div>'+      
              `<h2>Display Name: <span>${data[i].display_name}</span></h2>`+  
        '</div>'+
        '<div>'+      
              `<button onclick="userDetail(${data[i].display_name})"> More Info </button>`+
        '</div>'
        
     
             
      }
    wrapper.innerHTML = myHTML
      
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}
    
 const userDetail=(num)=>{
    document.getElementById('user-details-result-container').style.display = "grid";
console.log('num',num);
    fetch(`https://api.queritel.com/api/test-lab/hernandez/get_user_detail.php?display_name=${num}`).then( (response) =>{
        return response.json();
    }).then(function (data) {
         console.log('first name',data.last_name);
        document.getElementById("countryName").innerHTML = data.country_name;
        document.getElementById("ipAddress").innerHTML = data.ip_address;
        document.getElementById("countryCode1").innerHTML = data.country_code;
        document.getElementById("displayName").innerHTML = data.display_name;
        document.getElementById("firstName").innerHTML = data.first_name;
        document.getElementById("lastName").innerHTML = data.last_name;
        document.getElementById("countryFLAG").src = data.country_flag;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
    
}




 const search=()=>{    
    document.getElementById('search').style.display = "grid";
    if (document.getElementById('ip').value != null){
     fetch(`https://api.queritel.com/api/test-lab/hernandez/query_ip.php?ip=${document.getElementById('ip').value}`).then( (response) =>{        
       return response.json();
             }).then(function (data) {    
                console.log('data',data);
                 console.log('data',data.headers);
                if(data != null )
                {
                    document.getElementById("country").innerHTML = data.country_name;
                    document.getElementById("address").innerHTML = data.ip_address;
                    document.getElementById("countryCode").innerHTML = data.country_code;
                    document.getElementById("countryFlag").src = data.country_flag;                   
                    viewFlag(data.country_flag);
                }else{
                    alert('ip invalid. please use this format format: "8.8.8.8');
                }
                
            }).catch(function (err) {
                	console.warn('Something went wrong.', err);
                });
    }else{
        fetch('https://api.queritel.com/api/test-lab/hernandez/query_ip.php?ip=my_ip').then( (response) =>{
     return response.json();
   }).then(function (data) {
        console.log("my ip",data);
  })
 }
   
}

const closeSearch = ()=>{
    console.log('click');
    document.getElementById('search').style.display = "none";
}

const closeUserModal = ()=>{
    console.log('click');
    document.getElementById('userResult').style.display = "none";
}

const closeUserDetailsModal = ()=>{
    console.log('click');
    document.getElementById('user-details-result-container').style.display = "none";
}


const viewFlag=(flag)=>{


}