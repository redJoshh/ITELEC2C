// import { Fragment } from "react";
// import type { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  //(item:string)=>void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook : Allows to tap into built in features of react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // items = [];
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List Group</h1>
  //         <p>No item found</p>
  //       </>
  //     );

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No Item Found</p> : null;
  //   };

  //Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
