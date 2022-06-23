import {SocialProvider} from './context/SocialProvider'
import AppSocial from "./components/AppSocial"

	function App() {


  	return (
    	<SocialProvider>
      	<AppSocial /> 
    	</SocialProvider>
    
 	 )
	}

	export default App