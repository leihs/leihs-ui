import Link from "next/link";
import LeihsPage from "../components/leihs-page";

export default () => {
  return (
    <LeihsPage>
      <div className="container p-4">
        <h1>Hello World!</h1>
        <ul>
          <li>
            <Link prefretch href="./root-logged-out">
              root/logged out
            </Link>
          </li>
          <li>
            <Link prefretch href="./auth">
              auth stuff
            </Link>
          </li>
        </ul>
      </div>
    </LeihsPage>
  );
};
