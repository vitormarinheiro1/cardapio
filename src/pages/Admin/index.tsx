import { useParams, Navigate } from "react-router-dom";

export function Admin() {
 const params = useParams();
 if (params.user !== "vitor") {
   return <Navigate to="/" />;
 }
 return (
   <>
     <h1>Área restrita!</h1>
   </>
 );
}