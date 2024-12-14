"use client"

import axios from "axios";
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreatePage() {
    const [posts, setPosts] = useState([]);
    const apiEndPoint = "https://crud.teamrabbil.com/api/v1/CreateProduct";

    const router = useRouter()

    const [ProductName, setProductName] = useState('')
    const [ProductCode, setProductCode] = useState('')
    const [Img, setImg] = useState('')
    const [UnitPrice, setUnitPrice] = useState('')
    const [Qty, setQty] = useState('')
    const [TotalPrice, setTotalPrice] = useState('')
    const [CreatedDate, setCreatedDate] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const objData = {
            ProductName, Img, ProductCode, Qty, UnitPrice, TotalPrice
        }

        const res = await fetch(apiEndPoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(objData)
        })

        if (res.status === 201) {
            router.refresh()
            router.push('/CreateOption')
        }
    }

    return (
        <div class="w-full max-w-screen-md container mx-auto">
            <form onSubmit={handleSubmit} className="bg-gray shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label>
                    <span>Product Name:</span>
                    <input required type="text" className="block max-w-7xl bg-gray-200 "
                        onChange={(e) => setProductName(e.target.value)}
                        value={ProductName}
                    />
                </label>
                <label>
                    <span>Product Code:</span>
                    <input type="text" className="block max-w-7xl bg-gray-200"
                        onChange={(e) => setProductCode(e.target.value)}
                        value={ProductCode}
                    />
                </label>
                <label>
                    <span>Product Img:</span>
                    <input type="url" className="block max-w-7xl  bg-gray-200"
                        onChange={(e) => setImg(e.target.value)}
                        value={Img}
                    />
                </label>
                <label>
                    <span>Unit Price:</span>
                    <input type="text" className="block max-w-7xl  bg-gray-200"
                        onChange={(e) => setUnitPrice(e.target.value)}
                        value={UnitPrice}
                    />
                </label>
                <label>
                    <span>Qty:</span>
                    <input type="text" className="block max-w-7xl  bg-gray-200"
                        onChange={(e) => setQty(e.target.value)}
                        value={Qty}
                    />
                </label>
                <label>
                    <span>Total Price:</span>
                    <input type="text" className="block max-w-7xl  bg-gray-200"
                        onChange={(e) => setTotalPrice(e.target.value)}
                        value={TotalPrice}
                    />
                </label>
                <button
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                // disabled={isLoading}
                >
                    {/* {isLoading && <span>Adding...</span>} */}
                    {!isLoading && <span> Add </span>}

                </button>
            </form>
        </div >
    )
}