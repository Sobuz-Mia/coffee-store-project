import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCards = ({ coffee ,coffees,setCoffees}) => {
  const { name, _id, supplier, taste, photo } = coffee;

  const handleDelate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
                const remaining = coffees.filter(cof=>cof._id !== id);
                setCoffees(remaining)
            }
          });
      }
    });
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={photo} className="shadow-2xl w-40 h-40    " />
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="py-2">{supplier}</p>
          <p className="py-2">{taste}</p>
        </div>
        <div className="flex flex-col">
          <button
            type="button"
            className="focus:outline-none text-white bg-slate-300 hover:bg-stone-400 focus:ring-4 focus:bg-stone-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            View
          </button>
          <Link to={`/update/${_id}`}>
            <button
              type="button"
              className="focus:outline-none  bg-orange-200 hover:bg-stone-400 focus:ring-4 focus:bg-stone-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelate(_id)}
            type="button"
            className="focus:outline-none bg-red-400 text-white  hover:bg-stone-400 focus:ring-4 focus:bg-stone-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCards;
