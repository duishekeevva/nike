import React, {useState} from 'react';
import Header from "../../Components/Header/Header";
import {useForm} from "react-hook-form";
import './style.scss'
import axios from "axios";

const Admin = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState:{errors},
    }=useForm()

    const [file, setFile]=useState(null)

    const onSubmit =(data) => {
        const newData={...data, src: file.url}
        axios.post('https://65642480ceac41c0761d7ea7.mockapi.io/nike', newData)
            .then(({data})=>console.log(data))
    }

    const handleUpload = (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "gallery")
        formData.append("cloud_name", "dfho547kq")
        axios.post('https://api.cloudinary.com/v1_1/dfho547kq/image/upload', formData)
            .then(({data})=>setFile(data))
    }
    return (
        <div>
            <Header/>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className={'form-box'}>
                    <input type="file" onChange={handleUpload}/>
                    <input className={'form-box_name'} placeholder={'Name'} {...register("name")}/>
                    <input className={'form-box_description'} placeholder={'Description'} {...register("description")}/>
                    <input className={'form-box_price'} placeholder={'Price'} {...register("price")}/>
                    <button className={'form-box_button'} type={"submit"}>
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Admin;