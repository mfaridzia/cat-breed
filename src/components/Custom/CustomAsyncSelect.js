import AsyncSelect from 'react-select/async';
import styled from 'styled-components'

const CustomAsyncSelect = styled(AsyncSelect)`
  display: inline-block;
  width: 330px;
  min-height: 1px;
  text-align: left;
  margin-left: 150px;
  margin-top: 10px;
  outline: none;
  @media (max-width: 560px) {
    width: 280px;
    margin-left: 100px;
  }
  @media (max-width: 420px) {
    width: 250px;
    margin-left: 50px;
  }
  @media (max-width: 340px) {
    width: 200px;
    margin-left: 50px;
  }
`
export default CustomAsyncSelect;