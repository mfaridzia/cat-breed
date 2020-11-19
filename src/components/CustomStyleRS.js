const customStyles = {
  container: (provided) => ({
    ...provided,
    display: 'inline-block',
    width: '330px',
    minHeight: '1px',
    textAlign: 'left',
    marginLeft: '150px',
    marginTop: '10px'
  }),
  control: (provided) => ({
    ...provided,
    fontFamily: 'Montserrat',
    fontSize: '14px',
    border: 'none',
    borderRadius: '10px',
    minHeight: '1px',
    height: '42px',
  }),
  input: (provided) => ({
    ...provided,
    minHeight: '1px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    minHeight: '1px',
    paddingTop: '0',
    paddingBottom: '0',
    color: '#757575',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    minHeight: '1px',
    height: '24px',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    minHeight: '1px',
  }),
  valueContainer: (provided) => ({
    ...provided,
    minHeight: '1px',
    height: '40px',
    paddingTop: '0',
    paddingBottom: '0',
  }),
  singleValue: (provided) => ({
    ...provided,
    minHeight: '1px',
    paddingBottom: '2px',
  }),
};

export default customStyles;