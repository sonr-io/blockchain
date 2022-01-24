import type { NextPage } from "next";
import { useState, useReducer, useEffect } from "react";
import { Navigation } from "@components/Navigation";
import Header from "@components/Header";
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
    case "DESCRIPTION":
      return {
        ...state,
        description: action.payload.description,
      };
    case "BUCKET":
      return {
        ...state,
        bucketType: action.payload.bucketType,
      };
    case "OPTIONS":
      return {
        ...state,
        options: { metadata: action.payload.options },
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
  description: "",
  bucketType: "BUCKET_TYPE_UNSPECIFIED",
  options: "{}",
};

const BucketsPage: NextPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState({state});
  const [bucketView, setBucketView] = useState([]);

  const fetchBuckets = async () => {
    const response = await fetch("/api/buckets");

    if(!response.ok){
      throw new Error(`Error: ${response.status}`)
    }

    const buckets = await response.json();
    return setData(buckets)
  }

  const postBuckets = async () => {
/*     const response = await fetch("/api/buckets", {
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
  /*   const buckets = await response.json(); */
    console.log(state)
/*     return setData(buckets)
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
            Upload to the Sonr Highway Node
          </h1>
          <h2 className="text-2xl max-w-md mx-auto">Get started below</h2>
          <div className="flex justify-center">
            <div className="w-1/2 flex flex-col pb-12">
              <input
                placeholder="Bucket Label"
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
                placeholder="DESCRIPTION"
                className="mt-2 border rounded p-4"
                value={state.path}
                onChange={(e) =>
                  dispatch({
                    type: "DESCRIPTION",
                    payload: { description: e.target.value },
                  })
                }
              />
              <input
                placeholder="BUCKET_TYPE_UNSPECIFIED"
                className="mt-2 border rounded p-4"
                value={state.bucketType}
                onChange={(e) => {
                  dispatch({
                    type: "BUCKET",
                    payload: { bucketType: e.target.value },
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
              <input placeholder="size" className="mt-2 border rounded p-4" />
              <input type="file" name="Asset" className="my-4" />
              <button
                className="font-bold mt-4 bg-blue-500 text-white rounded p-4 shadow-lg hover:bg-white hover:text-blue-500 hover:border"
                onClick={postBuckets}
              >
                Create Bucket
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BucketsPage;