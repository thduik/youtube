

const checkIsProdEnv = () => {

   return import.meta.env != "undefined";

}

const loadEnvVar = (text) => {
    if (checkIsProdEnv()) {

      const res = import.meta.env["VITE_"+text];
      // alert("process undefined. Should be in dev env using vite: ", text , res);
      console.log("process undefined. Should be in dev env using vite: ", text , res, import.meta.env);
      return res
         
     } else {

         const res = process.env.BASE_API_URL
         // alert("process is defined. Not using vite. Should be using webpack in test or prod. envVarRes is:", text, res, process.env)
         console.log("process is defined. Not using vite. Should be using webpack in test or prod. envVarRes is:", text, res, process.env)
         return res;

     }
}
 

export default loadEnvVar;