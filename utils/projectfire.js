import { atom, selector } from "recoil";
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

const projectsState = atom({
  key: "projects",
  default: [],
});

const addProject = async (projectData) => {
  try {
    const projectRef = doc(db, "projects", "");
    await setDoc(projectRef, { ...projectData });
    return projectRef.id;
  } catch (error) {
    console.error("Error adding project:", error);
    return null;
  }
};

const getProjects = async () => {
  try {
    const projectsRef = db.collection("projects");
    const projectsSnapshot = await projectsRef.get();
    const projects = projectsSnapshot.docs.map((doc) => doc.data());
    return projects;
  } catch (error) {
    console.error("Error retrieving projects:", error);
    return [];
  }
};

export { addProject, projectsState, getProjects };
