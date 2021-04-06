import React, { useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllProductCategoriesSaga } from "../../redux/actions/ProjectCategoryAction";
import {createProject} from '../../redux/actions/ProjectActions'

function CreateProject(props) {
    const projectCategories = useSelector(
        (state) => state.ProjectCategoryReducer.projectCategories
    );
    const dispatch = useDispatch();

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
    } = props;

    useEffect(() => {
        dispatch(getAllProductCategoriesSaga());
    }, []);

    const handleEditorChange = (content, editor) => {
        setFieldValue('description', content);
    };
    return (
        <div className="container createProject">
            <h3>Create Project</h3>
            <form
                className="container"
                onSubmit={handleSubmit}
                onChange={handleChange}
            >
                <div className="form-group">
                    <p>Name</p>
                    <input
                        type="text"
                        name="projectName"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <p>Description</p>
                    <Editor
                        apiKey="ghz6w7f3x6gvo3c6cq2ci3ry3chsala0dvke6r7v9nt2pltu"
                        onEditorChange={handleEditorChange}
                    />
                </div>
                <div className="form-group">
                    <select
                        name="categoryID"
                        className="form-control"
                        onChange={handleChange}
                    >
                        {projectCategories.map((item, index) => {
                            return (
                                <option value={item.id} key={index}>
                                    {item.projectCategoryName}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-group btnSubmit">
                    <button className="btn btn-primary" type="submit">
                        Create Project
                    </button>
                </div>
            </form>
        </div>
    );
}
const CreateProjectForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return {
            projectName: "",
            description: "",
            categoryID: props.projectCatagories[0]?.id,
        };
    },
    validationSchema: Yup.object().shape({}),
    handleSubmit: (values, { props, setSubmitting }) => {
        props.dispatch(createProject(values))
    },
    displayName: "Login",
})(CreateProject);

const mapStateToProps = (state) => {
    return {
        projectCatagories: state.ProjectCategoryReducer.projectCategories,
    };
};

export default connect(mapStateToProps)(CreateProjectForm);
