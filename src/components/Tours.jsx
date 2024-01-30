import Card from "./Card";

function Tours({tours,removeTour}){
    return (
        <div className="container">
            <div>
            <h2 className="title">Plan with me</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour= {removeTour}></Card>      // creates a copy of object tour
                    })
                }
            </div>
        </div>
      
    )
}  

export default Tours;