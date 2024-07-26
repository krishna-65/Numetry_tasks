
function Homeleft(){
   const itemFirst = ["Sunday", "Monday", "Tuesday", "Wednesday"];
   const itemSecond = ["january", "february", "march", "april","may", "june", "august", "september"];
    return (
            <div className="bg-green-700 text-white p-4 w-[30%]">
                <div>
                    <h1 className="mb-4 text-2xl">Categories</h1>
                    {itemFirst.map((item,index) => (
                               <>
                                <h3 className="ml-8 w-full ">{item}</h3>        
                                <h2 className=" ml-8 w-full bg-white h-[1px] mb-2 "></h2>
                               </>                
                    ))}

                </div>
                <div>
                    <h1 className="mb-2 text-2xl mt-4">Archives</h1>
                    {itemSecond.map((item,index) => (
                               <>
                                <h3 className="ml-8 w-full ">{item}</h3>        
                                <h2 className=" ml-8 w-full bg-white h-[1px] mb-2"></h2>
                               </>                
                    ))}

                </div>
            </div>
    )
}
export default Homeleft;