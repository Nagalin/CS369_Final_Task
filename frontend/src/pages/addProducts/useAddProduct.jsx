import { useRef, useState } from "react"
import Swal from "sweetalert2"
import axios from "../../lib/axios"

const useAddProduct = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const name = useRef()
    const price = useRef()
    const detail = useRef()
    const material = useRef()
    const width = useRef()
    const height = useRef()
    const length = useRef()
    const unit = useRef()
    const [err, setErr] = useState("")
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      }
    
    const handleAddProduct = e => {
      e.preventDefault()
      const formData = new FormData();
      formData.append('name', name.current.value);
      formData.append('price', price.current.value);
      formData.append('detail', detail.current.value);
      formData.append('material', material.current.value);
      formData.append('width', width.current.value);
      formData.append('height', height.current.value);
      formData.append('length', length.current.value);
      formData.append('unit', unit.current.value);
      formData.append('pictureName', selectedFile);
     
      axios
        .post("/product",formData)
        .then(response=>{
          Swal.fire({
            icon: "success",
            title: response.data,
            showConfirmButton: true,
          });
      })
        .catch((error) => {
          console.error(error)
          setErr(error.response.data)
        })
    }
    
    return { 
      name, 
      price, 
      detail, 
      material, 
      width, 
      height, 
      length, 
      unit, 
      err, 
      handleAddProduct, 
      handleFileChange
    }
}

export default useAddProduct