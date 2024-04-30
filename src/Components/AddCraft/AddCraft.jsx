
import Swal from "sweetalert";


function AddCraft() {
    
  const handleData = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const subCatagory = form.subCatagory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const time = form.time.value;
    const stock = form.stock.value;
    const customization = form.customization.value;
    const name = form.name.value;
    const email=form.email.value
    const product = {
      image,itemName,subCatagory,description,price,rating,time,stock,customization,name,email
    }
    console.log(product);
    fetch("http://localhost:3000/addCraftItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal({
            title: "Congratulations!",
            text: "Product is added!",
            icon: "success",
          });
        }
      });

    
  };
  const handleCustomizationChange = (event) => {
    event.preventDefault();
      setCustomization(event.target.checked);
    };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleData} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                  required
                  name="image"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Item Name"
                  className="input input-bordered"
                  required
                  name="itemName"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">SubCatagory Name</span>
                </label>
                <input
                  type="text"
                  placeholder="SubCatagory Name"
                  className="input input-bordered"
                  required
                  name="subCatagory"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Short Description"
                  className="input input-bordered"
                  required
                  name="description"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                  name="price"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                  name="rating"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customization</span>
                </label>
                <input
                  type="text"
                  placeholder="Yes or No"
                  className="input input-bordered"
                  required
                  name="customization"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Preocessing time</span>
                </label>
                <input
                  type="text"
                  placeholder="Preocessing time"
                  className="input input-bordered"
                  required
                  name="time"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Stock Status</span>
                </label>
                <input
                  type="text"
                  placeholder="Stock Status"
                  className="input input-bordered"
                  required
                  name="stock"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="User Name"
                  className="input input-bordered"
                  name="userName"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddCraft;
