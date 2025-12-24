import axios from "axios";

async function data_fetcher() {
  "use server"
  const response = await axios.get('http://localhost:3000/api/user');
  return response.data;
}

export default async function Home() {

  async function caller() {
    const resp = await data_fetcher();
    console.log(JSON.stringify(resp));
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col justify-center items-center gap-[1vw]">
        <input type="text" placeholder="username" className="border border-white p-[1vw] hover:bg-gray-900" />
        <input type="text" placeholder="password" className="border border-white p-[1vw] hover:bg-gray-900" />
        <button onClick={caller} className="border border-white p-[1vw] bg-white text-black hover:bg-gray-900 hover:text-white cursor-pointer">Signup</button>
      </div>
    </div>
  );
}
