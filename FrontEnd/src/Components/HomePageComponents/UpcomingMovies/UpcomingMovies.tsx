import React from 'react'

const UpcomingMovies = () => {

    const UpcomingBgImg = "https://churchgists.com/wp-content/uploads/2022/06/moving-praise-and-worship-background-gif.gif"

    return (<>



        <div className="hero" style={{ backgroundImage: `url(${UpcomingBgImg})`, width: "100%", height: "300px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#7E635A", backgroundRepeat: "no-repeat" }}>

            <h1>{localStorage.getItem('Section_One')}</h1>


        </div>






    </>)
}

export default UpcomingMovies