import "./Experience.css";

export default function LeftExperience({ title, company, description, image }) {
    return (
        <div className="container-fluid mb-5">
            <div className="row align-items-center">
                <div className="col-md-6 col-sm-12 text-container order-md-1">
                    <h2 className="experience-title">{title}</h2>
                    <h3 className="company-name">{company}</h3>
                    <div className="d-md-none"> 
                        <div className="experience-image-container">
                            <img src={image} className="experience-image" alt="Experience" />
                        </div>
                    </div>
                    <ul className="text-start desc">
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 col-sm-12 d-none d-md-flex justify-content-center order-md-2">
                    <div className="experience-image-container">
                        <img src={image} className="experience-image" alt="Experience" />
                    </div>
                </div>
            </div>
        </div>
    );
}
