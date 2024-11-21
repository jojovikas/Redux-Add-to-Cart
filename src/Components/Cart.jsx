import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, selectCardItems } from '../redux/cartSlice'
import { Link } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {

  const dispatch = useDispatch();

  const cartItem = useSelector(selectCardItems)
  console.log("Cart Items = ", cartItem);

  return (

    <>

      <div className="container text-center my-5" style={{ width: "700px" }}>
        <ToastContainer />

        {cartItem.length == 0 && (
          <>
            <h1>You Cart is Empty</h1>
            <Link to={'/'} className='btn btn-warning'>Coutinue Shopping....</Link>
          </>
        )}


        {
          cartItem.map((item) => {
            return <div key={item.id} className="container my-5">
              <div className="card mb-3 bg-dark text-light text-center" style={{ maxWidth: "540px" }} >
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className='p-3'>
                      <img src={item.imgSrc}
                        className="img-fluid rounded-start"
                        style={{ borderRadius: "10px" }}
                        alt="..." />

                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.title}</p>
                      <button className='btn btn-primary mx-4'>{item.price} {" "} ₹</button>
                      <button className='btn btn-warning'>Buy Now</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          })
        }

        {
          cartItem.length != 0 && (

            <button className='btn btn-warning' onClick={() => {
              dispatch(clearCart())
              toast('Your Cart is Clear', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });

            }}>Clear Cart</button>
          )
        }

      </div>
    </>
  )
}

export default Cart
