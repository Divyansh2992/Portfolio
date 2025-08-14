import "./Experience.css"
import LeftExperience from "./LeftExperience";
import RightExperience from "./RightExperience";

export default function Experience(){
return(
       <div className="container-fluid mt-5">
            <div className="row text-center">
                <h1>Experience</h1>
                
                {/* First Experience - Left Experience */}
                <div className="col-12">
                    <LeftExperience 
                        title="WEB DEVELOPER-INTERN"
                        company="The Akshaya Patra Foundation"
                        description={[
                            "Conceptualized and developed 'Sensory Report,' a dynamic web application leveraging HTML, CSS, JavaScript, Node.js, Express, and MySQL to revolutionize student feedback collection for menu optimization at Akshaya Patra.",
                            "Designed intuitive user interfaces for seamless feedback submission and data visualization, enhancing user engagement and satisfaction. Resulted in actionable insights for improving daily menu selections.",
                            "Collaborated closely with cross-functional teams at Akshaya Patra to align project objectives with organizational goals. Implemented agile methodologies to ensure iterative improvements and stakeholder satisfaction"
                        ]}
                        image="images/photo-collage.png.png"
                    />
                </div>

                {/* Second Experience - Right Experience */}
                <div className="col-12">
                    <RightExperience 
                        title="Summer Intern"
                        company="MNIT Jaipur"
                        description={[
                            "Contributed across the full Software Development Life Cycle, including requirement analysis, system design, development, and testing of a data visualization web application.",
                            "Developed an interactive India map using D3.js with district-wise environmental data and created violin curve plots with Plotly.js, transforming raw data into clear, actionable insights.",
                            "Collaborated with researchers and professors to translate complex domain requirements into intuitive, scalable web interfaces, applying analytical thinking to solve challenges and ensure effective solutions"
                        ]}
                        image="images/MNITJ.png"
                        imageLink="https://github.com/Divyansh2992/IndianClimateAnalysis"
                    />
                </div>
            </div>
       </div>
)
}
