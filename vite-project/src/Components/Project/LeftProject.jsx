import "./Project.css";

export default function LeftProject({ text, image,head,link }) {
    return (
        <div className="container-fluid mb-5">
            <div className="row align-items-center"> {/* Align items center in row */}
                <div className="col-md-6 col-sm-12 text-container"> 
                    <h1>{head}</h1>
                    <p>{text}</p>
                    <a href={link}><button >Know More</button></a>
                </div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                    <div className="image-container">
                        <a href={link}><img src={image} className="image" alt="Project" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
