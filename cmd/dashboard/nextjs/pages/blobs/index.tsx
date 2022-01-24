import type { NextPage } from "next";
import { useState, useReducer, useEffect } from "react";
import { Navigation } from "@components/Navigation";
import Header from "@components/Header";
import useSWR from "swr";
/* var label = req.swagger.params['label'].value;
var path = req.swagger.params['path'].value;
var bucketDid = req.swagger.params['bucketDid'].value;
var size = req.swagger.params['size'].value;
var lastModified = req.swagger.params['lastModified'].value; */

function reducer(state:any, action:any) {
  switch (action.type) {
    case "LABEL":
      return {
        ...state,
        label: action.payload.label,
      };
    case "PATH":
      return {
        ...state,
        path: action.payload.path,
      };
    case "BUCKETDID":
      return {
        ...state,
        bucketDid: action.payload.bucketDid,
        size: 0,
        lastModified: Date.now()
      };
    case "OPTIONS":
      return {
        ...state,
        options: action.payload.options,
      };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}
/* "BUCKET_TYPE_UNSPECIFIED" || "BUCKET_TYPE_APP" || "BUCKET_TYPE_USER" */
const initialState = {
  label: "",
  path: "",
  bucketDid: "",
  size: 0,
  lastModified: '',
  options: "{}",
};


async function fetcher(url: string) {
  const resp = await fetch(url);
      if(!resp.ok){
      throw new Error(`Error: ${resp.status}`)
    }
  return await resp.json();
}


const BlobsPage: NextPage = () => {
  const { data,error } = useSWR("/api/Blobs", fetcher, { refreshInterval: 1000 });
  const [state, dispatch] = useReducer(reducer, initialState);
  const [datab, setData] = useState({state});
  const [optionString, setOptionString] = useState('')
  const [bucketView, setBucketView] = useState([]);

console.log(data)
  const postBlobs = async () => {
/*     const response = await fetch("/api/Blobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
    if(!response.ok){
      throw new Error(`Error: ${response.status}`)
    } */

    dispatch({ type: "CLEAR"});
  /*   const Blobs = await response.json(); */
    console.log(state)
/*     return setData(Blobs)
 */  }
/*   const fetchData = async () => {
    const response = await fetch(`url`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const bucket = await response.json();
    return setBucketView(bucket);
  }; */
  /* const postData = async () => {
    const response = await fetch(`url`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    dispatch({ type: "CLEAR" });
    const bucket = await response.json;
    return setData(bucket);
  }; */
  return (
    <>
    <Header />
    <Navigation />
      <main>
        <div className="h-[100vh] flex flex-col justify-center align-middle text-center">
          <h1 className="text-[72px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold">
            Deliver Blobs to your Buckets
          </h1>
          <h2 className="text-2xl max-w-md mx-auto">Get started below</h2>
          <div className="flex justify-center">
            <div className="w-1/2 flex flex-col pb-12">
              <input
                placeholder="Label"
                id="LABEL"
                className="mt-8 border rounded p-4"
                value={state.label}
                onChange={(e) =>
                  dispatch({
                    type: "LABEL",
                    payload: { label: e.target.value },
                  })
                }
              />
              <input
                placeholder="Path"
                className="mt-2 border rounded p-4"
                value={state.path}
                onChange={(e) =>
                  dispatch({
                    type: "PATH",
                    payload: { path: e.target.value },
                  })
                }
              />
              <input
                placeholder="Bucket DID"
                className="mt-2 border rounded p-4"
                value={state.bucketDid}
                onChange={(e) => {
                  dispatch({
                    type: "BUCKETDID",
                    payload: { bucketDid: e.target.value, size: 10},
                  });
                }}
              />
              <input
                placeholder="{}"
                className="mt-2 border rounded p-4"
                value={state.options}
                onChange={(e) =>
                  dispatch({
                    type: "OPTIONS",
                    payload: { options: e.target.value },
                  })
                }
              />
              <input type="file" name="Asset" className="my-4" />
              <button
                className="font-bold mt-4 bg-blue-500 text-white rounded p-4 shadow-lg hover:bg-white hover:text-blue-500 hover:border"
                onClick={postBlobs}
              >
                Upload Blob
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlobsPage;
