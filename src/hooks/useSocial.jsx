import { useContext } from "react";
import SocialContext from '../context/SocialProvider'


	const useSocial = () => {

    		return useContext(SocialContext)

	}

	export default useSocial