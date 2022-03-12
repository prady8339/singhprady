var request = new XMLHttpRequest();

request.open('GET','https://api.github.com/users/prady8339/repos ',true);

request.onload = function(){

  var data = JSON.parse(this.response)
  console.log(data);
  var statusHTML = "";


$.each(data,function(i,status){

  statusHTML += '<div class="card">';
  statusHTML += '<img class="card-img-top" src="https://avatars.githubusercontent.com/u/76277136?v=4" alt="Card image cap">';
  
  statusHTML +=  '<div class="card-body"> <h5 class="card-title">';
  statusHTML += status.name;
  statusHTML += '</h5> <p class="card-text"> ';
  statusHTML += status.description+'</p>';
 
  // $.each(status.contributors_url,function(j,contributers){
  //   statusHTML += '<p>'+contributers.login+'</p>';
  // });

  statusHTML += '<a href="'+status.html_url;
  statusHTML += '" class="btn btn-primary">Github</a></div> ';
  statusHTML += '</div>';
});

document.getElementById('halwa').innerHTML = statusHTML;

}
request.send();

