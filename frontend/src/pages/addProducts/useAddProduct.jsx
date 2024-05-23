import { FormEvent, useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "../../lib/axios";
const useAddProduct = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const name = useRef(HTMLFormElement)
    const price = useRef(HTMLFormElement)
    const detail = useRef(HTMLFormElement)
    const material = useRef(HTMLFormElement)
    const width = useRef(HTMLFormElement)
    const height = useRef(HTMLFormElement)
    const length = useRef(HTMLFormElement)
    const unit = useRef(HTMLFormElement)
    const [err, setErr] = useState("");
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };
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
  
    const handleAddProduct = e => {
      e.preventDefault()
      axios
        .post("/product",formData)
        .then(response=>{
        Swal.fire(response.data);
      })
        .catch((error) => {
          console.log(error)
        //   setErr(error.response.data);
        });
    };
    return { name, price, detail, material, width, height, length, 
        unit, err, handleAddProduct, handleFileChange};
}
export default useAddProduct