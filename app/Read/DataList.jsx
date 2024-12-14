"use client"
import axios from "axios";
import { useState, useEffect } from "react";


async function getData() {
    const res = await fetch('https://crud.teamrabbil.com/api/v1/ReadProduct')

    return res.json();
}



// const handleDelete = async (post) => {
//     // added APIendPoint and State in 2 line
//     const [posts, setPosts] = useState([]);
//     const apiEndPoint = "https://crud.teamrabbil.com/api/v1/DeleteProduct";

//     await axios.delete(apiEndPoint + "/" + post._id);
//     setPosts(posts.filter((p) => p._id !== post._id));
// };

export default async function DataList() {

    let datas = await getData();

    return (
        <div className="container mx-auto">


            <div className="overflow-x-auto ">
                <table className="table border-spacing-x-2.5 border border-slate-400">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="border border-slate-300 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 border-b border-blue-gray-100">Product</th>
                            <th className="border border-slate-300 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 border-b border-blue-gray-100">Unit Price</th>
                            <th className="border border-slate-300 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 border-b border-blue-gray-100">Qty</th>
                            <th className="border border-slate-300 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 border-b border-blue-gray-100">Total Price</th>
                            <th className="border border-slate-300 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 border-b border-blue-gray-100">Action</th>

                        </tr>
                    </thead>



                    <tbody>


                        {datas.data.map((data) => (
                            <>


                                <tr key={data._id}>
                                    {/* <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th> */}
                                    <td className="border border-slate-300">
                                        <div className="flex items-center">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={data.Img}
                                                        alt="Avatar " />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="">{data.ProductName}</div>
                                                <div className="text-sm opacity-50">{data.ProductCode}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border border-slate-300">{data.UnitPrice}</td>
                                    <td className="border border-slate-300">{data.Qty}</td>
                                    <td className="border border-slate-300">{data.TotalPrice}</td>
                                    <td className="border border-slate-300">
                                        <button>Edit </button>
                                        <button
                                            onClick={() => handleDelete(post)}
                                            className="">
                                            Delete
                                        </button></td>
                                    {/* <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th> */}
                                </tr>


                            </>
                        ))}


                    </tbody>




                </table>
            </div>



        </div >
    )
}


