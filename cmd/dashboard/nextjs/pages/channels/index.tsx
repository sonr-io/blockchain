import type { NextPage } from "next";
import { useState, useReducer, useEffect } from "react";
import { Navigation } from "@components/Navigation";
import Header from "@components/Header";
/* var name = req.swagger.params['name'].value;
var path = req.swagger.params['path'].value;
var bucketDid = req.swagger.params['bucketDid'].value;
var size = req.swagger.params['size'].value;
var lastModified = req.swagger.params['lastModified'].value; */

function reducer(state:any, action:any) {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.payload.name,
      };
    case "DESCRIPTION":
      return {
        ...state,
        description: action.payload.description,
      };
    case "OWNERS":
      return {
        ...state,
        owners: action.payload.owners,
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
  name: "",
  description: "",
  owners: [],
  options: "{}",
};

const ChannelsPage: NextPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState({state});
  const [bucketView, setBucketView] = useState([]);

  const fetchchannels = async () => {
    const response = await fetch("/api/channels");

    if(!response.ok){
      throw new Error(`Error: ${response.status}`)
    }

    const channels = await response.json();
    return setData(channels)
  }

  const postChannel = async () => {
/*     const response = await fetch("/api/channels", {
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
  /*   const channels = await response.json(); */
    console.log(state)
/*     return setData(channels)
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
          <h1 className="text-[42px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold">
            Upload to the Sonr Highway Node
          </h1>
          <h2 className="text-2xl max-w-md mx-auto">Get started below</h2>
          <div className="flex justify-center">
            <div className="w-1/2 flex flex-col pb-12">
              <input
                placeholder="Bucket name"
                id="name"
                className="mt-8 border rounded p-4"
                value={state.name}
                onChange={(e) =>
                  dispatch({
                    type: "name",
                    payload: { name: e.target.value },
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
                value={state.owners}
                onChange={(e) => {
                  dispatch({
                    type: "OWNERS",
                    payload: { owners: e.target.value },
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
                onClick={postChannel}
              >
                Create Channel
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChannelsPage;