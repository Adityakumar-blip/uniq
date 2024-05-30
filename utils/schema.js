import * as Yup from "yup";

const projectSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters long"),
  shortIntro: Yup.string()
    .required("Short introduction is required")
    .max(150, "Short introduction must be 150 characters or less"),
  img: Yup.string().required("Image URL is required"),
  githubUrl: Yup.string().required("GitHub URL is required"),
  techstack: Yup.array()
    .of(
      Yup.object().shape({
        value: Yup.string().required("Value is required"),
        label: Yup.string().required("Label is required"),
      })
    )
    .min(1, "At least one techstack item is required"),
  tags: Yup.array()
    .of(
      Yup.object().shape({
        value: Yup.string().required("Value is required"),
        label: Yup.string().required("Label is required"),
      })
    )
    .min(1, "At least one tag is required"),
});

export default projectSchema;
