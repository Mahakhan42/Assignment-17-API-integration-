import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ShowDetails (){
    const navigate = useNavigate();
    const {id} = useParams();
    const [singleProduct,setSingleProduct]=useState("");
    console.log(id);

    useEffect(() => {
        const fetchSingleData = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setSingleProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchSingleData();
    
    }, [id]);
    return(<>
      <br /><br />
      <center><h1><b><i><u>Product Details</u></i></b></h1></center><br /><br />
        <div className="container d-flex" style={{backgroundColor:'white',color:'#000' ,border:'15px double rgb(59, 117, 95)',padding:'10px'}}>
            <div className="row">
                <div className="col-md-6">
                <h1><b>{singleProduct.title}</b></h1>
                <p>{singleProduct.description}</p>
                <br />
                <button className="btn" onClick={()=>{navigate('/Home')}}>Back</button>
                </div>
                <div className="col-md-6 ">
                <img width={'300px'} src={singleProduct.image} alt="" />
                </div>
                <br /><br />
            
                <br /><br />
            </div>
        </div>
        </>
    )
}
export { ShowDetails}