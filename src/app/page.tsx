import { Client } from "./interfaces";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/clients");
  const data = await response.json();



  return (
    <main>

      {json.map((item: Client) => {
          return(
            <>
              <div className="border bg-gray-400 my-3 p-2">
                <div className="uppecase flex-1">{item.name}</div>
                <div className="flex-1 italic">{item.address}</div>
              </div>
            </>
          )
        })
      }

    </main>
  );
}
