import Link from "next/link";
import LeihsPage from "../components/styleguide/LeihsPage";

export default () => {
  return (
    <LeihsPage>
      <div className="container p-4">
        <h1>
          <a href="https://github.com/leihs/leihs-ui">Leihs UI</a> examples
        </h1>
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
          <li>
            <Link prefretch href="./login">
              <a>
                dummy page <code>/login</code>
              </a>
            </Link>
          </li>
          <li>
            <Link prefretch href="./login-dummy">
              <a>dummy login flow</a>
            </Link>
          </li>
        </ul>
      </div>
    </LeihsPage>
  );
};
