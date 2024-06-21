import Footer from "../components/Footer";
import Header from "../components/Header";
import Works from "../components/Works";
import Form from "../components/Form";
import projectsData from "../data/projects.json";
import { useEffect, useState } from "react";
import axios from "axios";
import Chatbox from "../components/Chatbox";

const Home = () => {
  const [projects, setProjects] = useState([projectsData]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projects");
        setProjects(response.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  const addProject = async (project) => {
    try {
      await axios.post("http://localhost:5000/add-project", project);
      setProjects((prevProjects) => [...prevProjects, project]);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="main">
      <Header />
      <Form addProject={addProject} />
      <Chatbox />
      <Works projects={projects} />
      <Footer />
    </div>
  );
};

export default Home;
