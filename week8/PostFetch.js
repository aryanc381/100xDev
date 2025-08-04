async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
    });
    const data = await response.json();
    console.log(data);
}

main();