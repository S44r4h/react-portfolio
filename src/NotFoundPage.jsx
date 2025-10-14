import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex justify-center flex-col  gap-5 ">
      <h1 className="text-center text-5xl">404 not found</h1>
      <button className="btn btn-neutral self-center ">
        <Link to="/">Homepage</Link>
      </button>
    </div>
  );
}
