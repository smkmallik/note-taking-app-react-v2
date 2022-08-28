function UserIcon(props) {
  return (
    <svg width='35' height='35' viewBox='0 0 32 32' {...props}>
      <path
        fill='none'
        d='M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z'
      ></path>
      <path
        fill='currentColor'
        d='M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z'
      ></path>
    </svg>
  )
}

function DeleteIcon(props) {
  return (
    <svg width='20' height='20' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='M21.5 6a1 1 0 0 1-.883.993L20.5 7h-.845l-1.231 12.52A2.75 2.75 0 0 1 15.687 22H8.313a2.75 2.75 0 0 1-2.737-2.48L4.345 7H3.5a1 1 0 0 1 0-2h5a3.5 3.5 0 1 1 7 0h5a1 1 0 0 1 1 1Zm-7.25 3.25a.75.75 0 0 0-.743.648L13.5 10v7l.007.102a.75.75 0 0 0 1.486 0L15 17v-7l-.007-.102a.75.75 0 0 0-.743-.648Zm-4.5 0a.75.75 0 0 0-.743.648L9 10v7l.007.102a.75.75 0 0 0 1.486 0L10.5 17v-7l-.007-.102a.75.75 0 0 0-.743-.648ZM12 3.5A1.5 1.5 0 0 0 10.5 5h3A1.5 1.5 0 0 0 12 3.5Z'
      ></path>
    </svg>
  )
}

function ArchiveIcon(props) {
  return (
    <svg width='20' height='20' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='m21.706 5.292l-2.999-2.999A.996.996 0 0 0 18 2H6a.997.997 0 0 0-.707.293L2.294 5.292A.996.996 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM12 18l-5-5h3v-3h4v3h3l-5 5z'
      ></path>
    </svg>
  )
}

function EditIcon(props) {
  return (
    <svg width='20' height='20' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75l-2.53 2.54l3.75 3.75l2.53-2.54z'
      ></path>
    </svg>
  )
}

function UndoIcon(props) {
  return (
    <svg width='20' height='20' viewBox='0 0 512 512' {...props}>
      <path
        fill='currentColor'
        d='M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48Zm-9.17 241.14V344L146 248l100.83-96v54.86c96.5 0 119.17 69 119.17 137.14c-27.85-35.57-52.48-54.86-119.17-54.86Z'
      ></path>
    </svg>
  )
}
export { UserIcon, DeleteIcon, ArchiveIcon, EditIcon, UndoIcon }
