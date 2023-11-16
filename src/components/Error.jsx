function Error({children}) {
  return (
    <div className="text-center bg-red-600 text-white font-bold p-2 m-2 uppercase">
        {children}
    </div>
  )
}

export default Error