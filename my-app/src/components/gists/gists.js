import { useEffect, useState } from "react";
const URL = "https://jsonplaceholder.typicode.com/posts";
export function Gists() {
  const [gist, setGist] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    const getGists = async () => {
      try {
        setIsloading(true);
        const result = await fetch(URL);
        const data = await result.json();
        const d = data.splice(0, 10);
        setGist(d);
        setIsloading(false);
      } catch (e) {
        setError(e);
      } finally {
        setIsloading(false);
      }
    };
    getGists();
  }, []);

  if (error) {
    return (
      <div>
        <h1>error</h1>
      </div>
    );
  }
  if (isLoading) {
    return <h1>loading..</h1>;
  }
  return (
    <div>
      {gist.map((n) => (
        <div>
          <h1 style={{ color: "grey" }} key={n.id}>
            {n.title}
          </h1>
          <hr />
        </div>
      ))}
    </div>
  );
}
