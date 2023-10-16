import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./../Provider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user)
        const createdAt = result.user?.metadata?.creationTime;
        const user = {email, createdAt:createdAt}
        fetch('http://localhost:5000/user',{
          method:'POST',
          headers:{
            "content-type": "application/json"
          },
          body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleCreateAccount} className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Create account to our platform
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div className="flex text-left  w-1/3 ">
          <a
            href="#"
            className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create an account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          <button>
            have registered?
            <NavLink
              to={"/login"}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login account
            </NavLink>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
