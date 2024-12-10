const Jumbotron = () => {
    return (
        <div>
            {/* Diseño existente */}
            <div className="p-5 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                    <p className="fs-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, eligendi,
                        in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam
                        nobis illo aspernatur vitae fugiat numquam repellat.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Call to action!
                    </button>
                </div>
            </div>

            {/* Nuevo diseño usando Grid */}
            <div className="container text-center mt-4">
                <div className="row">
                    <div className="col">
                       
                    </div>
                    <div className="col">
                        
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
