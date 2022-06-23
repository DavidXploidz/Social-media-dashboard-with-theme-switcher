import { createContext } from "react";
import { useState } from "react";

	const SocialContext = createContext()

	const SocialProvider = ({children}) => {

		const [cambiar, setCambiar] = useState(false)

    	return(
       	 <SocialContext.Provider 
            	value={{
					cambiar,
					setCambiar
                
           	 }} 
       	 >
           	 {children}
        	</SocialContext.Provider>
   	 )
	}



	export {
    	SocialProvider
	}

	export default SocialContext