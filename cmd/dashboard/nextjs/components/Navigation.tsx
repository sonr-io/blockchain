import React, { FC, useState } from "react";
import {
  HomeButton,
  BlobsButton,
  BucketsButton,
  ChannelsButton,
  ObjectsButton,
  GraphButton,
} from "./NavButtons/Buttons";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Dropdown } from "./Dropdown";

interface IProps {}
interface OptionProps {
  option: string;
}
/**
 * @author
 * @function @Navigation
 **/

export const Navigation: FC<IProps> = (props: any) => {
    const { theme, setTheme } = useTheme();

    const dark = theme === 'dark' ? true : false;
  const options: any[] = ["Edit", "Duplicate", "Archive", "Move", "Delete"];
  const [isActive, setActive] = useState(false);
  const [drop, setDrop] = useState("Options");
  const dropdownHandler = (e: any) => {
    setDrop(e.target.value);
    setActive(!isActive);
  };
  return (
    <div className="flex flex-col items-start bg-white py-[0px] absolute max-w-[250px] max-h-full left-0 top-[50px]">
      <div className="flex flex-col items-start py-0 px-[12px] static max-w-[250px] h-[324px] left-0 top-[16px]">
        <div className="flex-none order-none self-stretch flex-grow-0 my-[20px] mx-0">
          <Link href={"/"}>
            <a>
              <HomeButton />
            </a>
          </Link>
          <Link href={"/buckets"}>
            <a>
              <BucketsButton />{" "}
            </a>
          </Link>
          <Link href={"/blobs"}>
            <a>
              <BlobsButton />{" "}
            </a>
          </Link>

          <Link href={"/channels"}>
            <a>
              <ChannelsButton />
            </a>
          </Link>
          <Link href={"/objects"}>
            <a>
              <ObjectsButton />
            </a>
          </Link>
          <Link href={"/graph"}>
            <a>
              <GraphButton />
            </a>
          </Link>
          {/* <>
            <button onClick={() => setActive(!isActive)}>{drop}</button>
            <div
              className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ${
                isActive === true ? "block" : "hidden"
              }`}
            >
              {options instanceof Array &&
                options.map((option: any) => (
                  <div
                    key={option}
                    className="cursor-pointer hover:bg-gray-300"
                    onClick={dropdownHandler}
                  >
                    {option}
                  </div>
                ))}
               
            </div>
          </> */}
        </div>
      </div>
    </div>
  );
};
