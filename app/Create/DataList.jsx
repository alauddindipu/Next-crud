async function getData() {
    const res = await fetch('https://crud.teamrabbil.com/api/v1/ReadProduct')

    return res.json();
}
export default async function DataList() {
    let datas = await getData();

    return (
        <div>


                    <div className="overflow-x-auto ">
                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr>
                                    {/* <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th> */}
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Product</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Unit Price</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Qty</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Total Price</th>
                                </tr>
                            </thead>



                            
            {datas.data.map((data) => (
                <div key={data._id}>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    {/* <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th> */}
                                    <td>
                                        <div className="flex items-center">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={data.Img}
                                                        alt="Avatar " />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{data.ProductName}</div>
                                                <div className="text-sm opacity-50">{data.ProductCode}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center">
                                            {data.UnitPrice}
                                        </div>
                                       
                                    </td>
                                    <td>{data.Qty}</td>
                                    <td>{data.TotalPrice}</td>
                                    {/* <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th> */}
                                </tr>
                               
                            </tbody>


                            </div>
                        ))}

                        </table>
                    </div>


               
        </div>
    )
}


