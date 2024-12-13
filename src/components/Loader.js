import { lineSpinner } from "ldrs";
lineSpinner.register();

export default function Loader() {
  return (
    <div className="loader">
      <l-line-spinner
        size="55"
        stroke="6"
        speed="1"
        color="#6741d9"
      ></l-line-spinner>
    </div>
  );
}
