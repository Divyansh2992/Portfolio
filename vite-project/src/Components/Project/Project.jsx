import ProjectCard from "./ProjectCard";

export default function Project(){
    const projects = [
        {
            head: "Green Pulse",
            image: "/images/greenpule.png",
            link: "https://divyansh2992.github.io/GreenPulseOK200/",
            text: "A frontend-focused website advocating eco-conscious living, featuring a carbon footprint calculator, sustainable tourism guides, and interactive quizzes/games. Built with HTML, CSS, and vanilla JavaScript."
        },
        {
            head: "Ecommerce",
            image: "/images/ecommerce.png",
            link: "https://github.com/Divyansh2992/Ecommerce.git",
            text: "Built with Node.js, Express, MongoDB, and EJS, this scalable platform demonstrates CRUD operations, user authentication, and responsive design."
        },
        {
            head: "Weather Box",
            image: "/images/weather.png",
            link: "https://github.com/Divyansh2992/WeatherSearchBox.git",
            text: "A dynamic weather app built with React and a weather API, providing real-time weather updates based on user-inputted city names."
        },
        {
            head: "Sparkathon-SIRN",
            image: "/images/Sparkathon.png",
            link: "https://github.com/Divyansh2992/Walmart_Sparkathon",
            text: "A comprehensive project built for Walmart Sparkathon, featuring advanced data analytics and visualization capabilities for retail optimization."
        },
        {
            head: "Movie Recommender System",
            image: "/images/MovieReommenderSystem.png",
            link: "https://github.com/Divyansh2992/movie-recommender-system",
            text: "An intelligent movie recommendation system that analyzes user preferences and viewing history to suggest personalized movie choices."
        },
        {
            head: "PaperPlate Calculator",
            image: "/images/PaperPlateCalculator.png",
            link: "https://github.com/Divyansh2992/PaperPlate",
            text: "A user-friendly paper plate cost calculator application that helps users efficiently calculate expenses for paper plates."
        },
        {
            head: "Ecommerce 2",
            image: "/images/Ecommerce2.png",
            link: "https://github.com/Divyansh2992/ecommerce_2",
            text: "An enhanced e-commerce platform with advanced features including user authentication, product management, and secure payment processing."
        },
        {
            head: "TaskMint",
            image: "/images/TaskMint.png",
            link: "https://github.com/Divyansh2992/TaskMint",
            text: "A full-stack web application for managing agents and distributing tasks efficiently. Features user authentication, agent management, and automated task distribution from uploaded CSV/XLS files."
        },
        {
            head: "Indian Climate Analysis",
            image: "/images/MNITJ.png",
            link: "https://github.com/Divyansh2992/IndianClimateAnalysis",
            text: "A comprehensive platform for interactive climate data visualization, analysis, and downloads for all districts of India. Features interactive maps, climate analysis tools, and data downloads in multiple formats."
        }
    ];

    return(
        <div className="container-fluid mt-5">
            <div className="row">
                <h1 className="text-center mb-5">Projects</h1>
                <div className="row justify-content-center">
                    {projects.map((project, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}