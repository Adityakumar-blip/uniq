import { db } from "../../../utils/firebase";

const validateRequest = (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Invalid request body" });
  }
};

const createProject = async (req, res) => {
  debugger;
  const { title, description } = req.body;
  console.log("request", req.body);
  try {
    const projectRef = db.collection("projects").doc();
    await projectRef.set({ title, description });
    return res.status(201).json({ message: "Project created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error creating project" });
  }
};

const getProjects = async (req, res) => {
  try {
    const projectsRef = db.collection("projects");
    const projects = await projectsRef.get();
    const projectsData = projects.docs.map((doc) => doc.data());
    return res.status(200).json(projectsData.title);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching projects" });
  }
};

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      validateRequest(req, res);
      return createProject(req, res);
    case "GET":
      return getProjects(req, res);
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
