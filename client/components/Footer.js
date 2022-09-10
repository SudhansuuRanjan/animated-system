const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <div className="m-[auto] text-center p-8 text-gray-400 font-light">
        <p>
            © {year} CineScape. All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer