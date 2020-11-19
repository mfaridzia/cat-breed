import { components } from 'react-select';
import { MagnifyingGlass } from 'phosphor-react';

const DropdownIndicator = props => {
  return(
   components.DropdownIndicator && (
     <components.DropdownIndicator {...props}>
         <MagnifyingGlass size={20} weight="bold" />
     </components.DropdownIndicator>
   )
  )
 }

 export default DropdownIndicator;