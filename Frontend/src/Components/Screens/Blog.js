import React from 'react'

function Blog() {
    return (
        <div><br></br>
            <div className="row" style={{margin:0}}>
                <div className="col-12 col-md-3 col-lg-3 col-xl-3" >
                    <div className="card" >
                        <div> <img src={require('../../assets/john-wick-2-poster-gun.jpg')} style={{margin:0}}className="card-img" alt="" height="100" />
                 </div>
                        <div className="card-body text-left">
                            <h4 className="text-secondary" style={{fontFamily:"sans-serif"}}>Title:My First Blog</h4>
                        
                            <h6 className="text-secondary" style={{fontFamily:"sans-serif",fontSize:"13px"}}>Created:Sep 12 2020, Community:Food</h6>
                        </div>
                        <div className="card-footer">
                        <div className="row" style={{margin:0}}>
                           <div className="col-4 col-md-4 col-lg-4 col-xl-4" >
                            <button className="btn "><i class="fa fa-code" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-4 col-md-4 col-lg-4 col-xl-4" >
                            <button className="btn "><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-4 col-md-4 col-lg-4 col-xl-4" >
                            <button className="btn "> <i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 col-lg-3 col-xl-3 " >
                    <div className="card" >
                        <div> <img src={require('../../assets/logo.png')} style={{margin:0}}className="card-img" alt="" height="100" />
                 </div>
                        <div className="card-body text-left">
                            <h4 className="text-secondary" style={{fontFamily:"sans-serif"}}>Title:My Second Blog</h4>
                        
                            <h6 className="text-secondary" style={{fontFamily:"sans-serif",fontSize:"13px"}}>Created:Sep 12 2020, Community:Food</h6>
                        </div>
                        <div className="card-footer">
                        <div className="row" style={{margin:0}}>
                           <div className="col-4 col-md-4 col-lg-4 col-xl-4" >
                            <button className="btn "><i class="fa fa-code" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-4 col-md-4 col-lg-4 col-xl-4" >
                            <button className="btn "><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-4 col-md-4 col-lg-4 col-xl-4" >
                            <button className="btn "> <i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 col-xl-3" >
                    <div className="card" >
                        <div> <img src={require('../../assets/black-widow.jpg')} style={{margin:0}}className="card-img" alt="" height="100" />
                 </div>
                        <div className="card-body text-left">
                            <h4 className="text-secondary" style={{fontFamily:"sans-serif"}}>Title:My Third Blog</h4>
                        
                            <h6 className="text-secondary" style={{fontFamily:"sans-serif",fontSize:"13px"}}>Created:Sep 12 2020, Community:Movies</h6>
                        </div>
                        <div className="card-footer">
                        <div className="row" style={{margin:0}}>
                           <div className="col-4 col-md-4 col-lg-4 col-xl-4" >
                            <button className="btn "><i class="fa fa-code" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-4 col-md-4 col-lg-4 col-xl-4" >
                            <button className="btn "><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-4 col-md-4 col-lg-4 col-xl-4" >
                            <button className="btn "> <i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 col-xl-3 " >
                    <div className="card" >
                        <div> <img src={require('../../assets/sucide-squad.jpg')} style={{margin:0}}className="card-img" alt="" height="100" />
                 </div>
                        <div className="card-body text-left">
                            <h4 className="text-secondary" style={{fontFamily:"sans-serif"}}>Title:My First Blog</h4>
                            
                            <h6 className="text-secondary" style={{fontFamily:"sans-serif",fontSize:"13px"}}>Created:Sep 12 2020 Community:Food</h6>
                        </div>
                        <div className="card-footer">
                        <div className="row" style={{margin:0}}>
                           <div className="col-4 col-md-4 col-lg-4 col-xl-4" >
                            <button className="btn "><i class="fa fa-code" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-4 col-md-4 col-lg-4 col-xl-4" >
                            <button className="btn "><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-4 col-md-4 col-lg-4 col-xl-4" >
                            <button className="btn "> <i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                            </div>
                            </div>
                    </div>
                </div>
                       </div>
                       </div>
    )
}

export default Blog
