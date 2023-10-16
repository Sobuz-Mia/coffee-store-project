import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateData = () => {
    const coffee = useLoaderData();
    const { name, _id, supplier, taste, category, details, photo,chef } = coffee;
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = {name,chef,supplier,taste,category,details,photo};

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Coffee update successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset()
            }
            console.log(data);
        })

    }
    return (
        <form onSubmit={handleUpdate} >
        <div className="w-1/2 mx-auto bg-[#F4F3F0] p-10 mt-5 rounded-md">
          <h2 className="text-4xl my-5 text-black font-bold">Update Coffee</h2>
          <div className="grid gap-4 mb-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                id="first_name"
                className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="Enter coffee name"
                name="name"
                defaultValue={name}
              />
            </div>
            <div>
              <input
                type="text"
                id="first_name"
                className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="Enter coffee chef"
                name="chef"
                defaultValue={chef}
              />
            </div>
            <div>
              <input
                type="text"
                id="first_name"
                className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="Enter supplier name"
                name="supplier"
                defaultValue={supplier}
              />
            </div>
            <div>
              <input
                type="text"
                id="first_name"
                className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="Enter coffee Taste"
                name="taste"
                defaultValue={taste}
              />
            </div>
            <div>
              <input
                type="text"
                id="first_name"
                className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="Enter coffee category"
                name="category"
                defaultValue={category}
              />
            </div>
            <div>
              <input
                type="text"
                id="first_name"
                className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="Enter Details"
                name="details"
                defaultValue={details}
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
              defaultValue={photo}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-black w-full my-4  rounded-lg px-5 py-2.5 text-center"
          >
            Update Value
          </button>
        </div>
      </form>
    );
};

export default UpdateData;