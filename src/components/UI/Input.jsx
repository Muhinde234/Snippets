

const Input = ({label,value,onChange,props,placeholder,id,type="text",className='',required}) => {
  return (
 <div>
   <label htmlFor={id}
   className="block pb-2"
   >{label}</label>
   <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    {...props}
    className={`border border-blue-400 rounded-lg w-full
      placeholder:text-sm p-1
      text-xl
     ${className}`}
    required={required}

    />
 </div>
  )
}

export default Input