class Github{
  constructor(){
    this.client_id='98e1a610e9c56933975b',
    this.client_secret='8d55931275ac2860e88a88ed1ad7e7a316f20e2d',
    this.repos_count=5,
    this.repos_sort='created: asc'
  }
    
 async get(user){
  const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

const reposResponse= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    


const profile =await  profileResponse.json();
    const  repos=await reposResponse.json();


    return {
     profile,
      repos
    }

  }

 

  
 
}