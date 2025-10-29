import axios from "axios";

async function getUserDetails() {
  await new Promise((r) => setTimeout(r, 5000));
  const response = await axios({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'GET'
  });
  return response.data;
}
export default async function Home() { // async components are only available in server components not client components
  const userDetails = await getUserDetails();
  console.log(userDetails)
  return (
    <div className="">
      hi there
      <p>Name: {userDetails.userId}</p>
    </div>
  );
}
