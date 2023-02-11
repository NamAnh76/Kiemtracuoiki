document.getElementById('mybtn').addEventListener('click',getData)
function getData(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        let author = data.results;
        // console.log(auther)
        let output = "<h2><center> Get user Data </center></h2>";
        author.forEach(function (lists) {
            output += `
            
    });
        document.getElementById('output').innerHTML = output;
    });
}
