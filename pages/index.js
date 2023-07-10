import Head from "next/head";
import { getApi } from "@/utils/api";
import { useEffect, useCallback, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const getProductDetails = useCallback(async () => {
    const fetchApi = getApi(process.env.API_URL);

    await fetchApi.then((res) => {
      setData(res.data.obj);
    });
  }, []);

  useEffect(() => {
    getProductDetails();
  }, [getProductDetails]);

  return (
    <>
      <h1 title="UI looks stupid. But don't worry, it is totally responsive!">
        I think this is what you asked for.
        <br />
        <em title="UI looks stupid. But don't worry, it is totally responsive!">
          HOVER ME
        </em>
      </h1>

      {Array.isArray(data)
        ? data.map((item, i) => (
            <ul key={i}>
              {Object.keys(item).map((key, i) => (
                <li key={i}>
                  <b>
                    <div>{key}</div>
                  </b>
                  <span>min-{item[key].min}</span>
                  <span>{"     "}</span>
                  <span>max-{item[key].max}</span>
                </li>
              ))}
            </ul>
          ))
        : "There is no available data."}
    </>
  );
}
