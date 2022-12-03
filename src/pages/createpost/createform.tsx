import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { registerVersion } from "firebase/app";
import {addDoc, collection} from "firebase/firestore"  //add doc ile ekle. collection ile collection sec
import { auth, db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom"

interface CreateFormData {
    title:string;
description: string;}

export const CreateForm = ( ) =>{
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const schema =yup.object().shape({
        title: yup.string().required("You must add a title"),
        description: yup.string().required("You must add a description"),
    });
    const {register, handleSubmit, formState:{errors}} = useForm <CreateFormData>({
        resolver: yupResolver(schema),
    });


    const postsRef = collection(db,"posts" );
    
    const onCreatePost = async (data:CreateFormData) => {
       await addDoc(postsRef, {
        ...data,  //asagıdaki gibi yapacagımıza böyle yapabiliriz  destructring object
       // title: data.title,
       // description : data.description,
        username: user?.displayName,
        userId: user?.uid,
       }) ;
       navigate("/");
    };

    return (
    <form onSubmit={handleSubmit(onCreatePost)}>
        <input placeholder="title..." {...register("title")}/>
        <p style={{color:"red", fontSize:"12px" , marginTop:"0px" }}>{errors.title?.message}</p>
        <textarea placeholder="description..." {...register("description")} />
        <p style={{color:"red",fontSize:"12px" , marginTop:"-3px" }}>{errors.description?.message}</p>
        <input type="submit" className="submitButton" />
    </form>
     );
};