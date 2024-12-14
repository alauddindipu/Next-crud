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
        <form onSubmit={handleSubmit} className="w-1/2">
            <label>
                <span>Product Name:</span>
                <input required type="text"
                    onChange={(e) => setProductName(e.target.value)}
                    value={ProductName}
                />
            </label>
            <label>
                <span>Product Code:</span>
                <input type="text"
                    onChange={(e) => setProductCode(e.target.value)}
                    value={ProductCode}
                />
            </label>
            <label>
                <span>Product Img:</span>
                <input type="url"
                    onChange={(e) => setImg(e.target.value)}
                    value={Img}
                />
            </label>
            <label>
                <span>Unit Price:</span>
                <input type="text"
                    onChange={(e) => setUnitPrice(e.target.value)}
                    value={UnitPrice}
                />
            </label>
            <label>
                <span>Qty:</span>
                <input type="text"
                    onChange={(e) => setQty(e.target.value)}
                    value={Qty}
                />
            </label>
            <label>
                <span>Total Price:</span>
                <input type="text"
                    onChange={(e) => setTotalPrice(e.target.value)}
                    value={TotalPrice}
                />
            </label>
            <button
                className="btn-primary"
            // disabled={isLoading}
            >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span> Add </span>}

            </button>
        </form>
    )
}