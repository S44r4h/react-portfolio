export default function Movies({ list }) {
  return (
    <>
      <p className="text-secondary font-bold">My RSS Movie Feed</p>
      <p>------------</p>
      <div className="">
        {list.map((item, i) => (
          <div key={i} className="p-1 text-primary text-[10px] flex">
            <div className=" text-base-content pr-1 ">{item.watchdate} </div>
            <div className="max-w-40 truncate pr-1">{item.title}</div>
            <div className="inline pr-1"> ({item.filmyear})</div>
            <div className="text-secondary"> {item.own_rating}</div>
          </div>
        ))}
      </div>
    </>
  );
}
