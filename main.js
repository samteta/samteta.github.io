function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
      console.log(data);
      const html = data.map(user =>{
          return `<nobr>
            <div class="list_in" data-id= "">
            <p id="name">Name: ${user.name}</p>
            <p id="email">Email: ${user.email}</p>
            </div></nobr>`;
          // trying to get the function from the button
          //function getdata(){
          //document.getElementById('.first').innerHTML= user_id;
          //console.log(user_id);
      //}
      })
      .join("");
      // function to turn object into an array  But it is useless now
      //const myArray = Object.values(data);
        //document.getElementById("col").innerHTML = myArray;console.log(html);
      console.log(html);
      document
          .querySelector("#col")
          .insertAdjacentHTML("afterbegin", html);
    // another functions i was trying
    //  function getdata(dt){
        //  dt.preventDefault();
         // if(dt.target.classList.contains('btn')){
              //let button = dt.target.parentElement.parentElement;
              //console.log(button);
          //}
      //}
  })
    .catch(Error =>{
      console.log(Error);
  });
}
function getdata() {
  fetch("https://jsonplaceholder.typicode.com/users/1/posts")
  .then(response => response.json())
  .then(data => {
      console.log(data);
      const html = data.map(user =>{
          return `<nobr>
            <div class="show_in" data-id= "">
            <p class="id">ID: ${user.id}</p>
            <p class="title">Title: ${user.title}</p>
            <p class="body">Body: ${user.body}</p>
            </div></nobr>`;
      })
      .join("");
      console.log(html);
      document
          .querySelector("#shows")
          .insertAdjacentHTML("afterbegin", html);
  });
}
  
fetchData();