
const urls = 'https://cat-fact.herokuapp.com/facts'

fetch(urls).then (
    (response) => { 
      return  response.json()
    }
).then(
   (data) => {
      let api ='';
      data.map((values) => {
           console.log(values)
        api += `
        <div class="card" style="width: 50%;margin-left:25%;margin-top:20px;border:none;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;font-size:1rem;
        <div class="card-body"; style= "border-radius: 15px;">
        <p class="card-text">Type :${values.type}</p>
        <p class="card-text">User :${values.user}</p>
        <p class="card-title">ID :${values._id}</p>
        <u style="color:red;font-size:1.5rem;"><p class="card-text">Details</p></u>
        <p class = "card-text">${values.text}</p>
      </div>
</div>
       `
      document.querySelector('.container').innerHTML = api;
       
      })

})


         
         
        // for(let i = 0; i < data.data.length; i++)
        //       console.log(data.data[i])
            //   apis += `
            //           <div class="card" style="width: 50%;display:flex;place-items:center;margin-left:25%;margin-top:30px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;padding:5px;font-size:1rem;font-weight:400px;cursor: pointer;"> 
            //          <div class="card-body">
            //             <p class="card-title">ID :${data.data}</p>
            //             <p class="card-text">BreedName :${data.data[i]}</p>
            //            <p class="card-text">LifeTime :${data.data[i]} to ${data.data[i]}  </p>
            //             <p class="card-text">Male_weight :${data.data[i].attributes} to ${data.data[i]}  </p>
            //             <p class="card-text">Female_weight : ${data.data[i]}  </p>
            //             <p class="card-text">LifeTime :${data.data[i]}  </p>
            //              <span style ="color : red;font-size:2em;"><u>Breed Discription</u></span>
            //             <p   style ='box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;border:none;outline:none;border-radius:3px;padding:5px;'>
                        
            //             </p>
            //             </div>  
            //         </div> 
                    //   `
                    //   document.querySelector('.container').innerHTML = apis;
              
    
 
 
