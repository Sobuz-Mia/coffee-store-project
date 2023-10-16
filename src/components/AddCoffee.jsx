import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleSubmitData = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const createCoffee = {name,chef,supplier,taste,category,details,photo};
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(createCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Coffee added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset()
            }
            console.log(data)
        })
        // console.log(name,chef,supplier,taste,category,details,photo);
    }
  return (
    <form onSubmit={handleSubmitData}>
      <div className="w-1/2 mx-auto bg-[#F4F3F0] p-10 mt-5 rounded-md">
        <h2 className="text-4xl my-5 text-black font-bold">Add New Coffee</h2>
        <div className="grid gap-4 mb-6 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter coffee name"
              name="name"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter coffee chef"
              name="chef"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter supplier name"
              name="supplier"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter coffee Taste"
              name="taste"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter coffee category"
              name="category"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter Details"
              name="details"
            />
          </div>
        </div>
        <div className="w-full">
          <input
            type="text"
            id="first_name"
            className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
            placeholder="Upload photo url"
            name="photo"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-black w-full my-4  rounded-lg px-5 py-2.5 text-center"
        >
          Add a new coffee
        </button>
      </div>
    </form>
  );
};

export default AddCoffee;
