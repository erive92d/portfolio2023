
// eslint-disable-next-line react/prop-types
export default function PageContent({children, header}) {
  return (
    <div  className="min-h-screen bg-white flex flex-col lg:gap-14 px-10 py-12 items-center justify-center">
        <h1 className="font-bold text-5xl w-full lg:text-4xl text-center py-12 ">{header}</h1>
            {children}
    </div>
  )
}
