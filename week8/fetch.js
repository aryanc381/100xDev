function main() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(async response => {
        const json = await response.json();
        console.log(json.name.length);
    })
}

async function main2() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const json = await response.json();
    console.log(json);    

}

main2();
main();