import { Editor } from "@tinymce/tinymce-react";
import { withFormik } from "formik";
import React, { useEffect, useState } from "react";
import {connect, useDispatch, useSelector} from 'react-redux'
import {setSubmitForm} from '../../redux/actions/DrawerActions'
import * as Yup from 'yup'
import { getAllProductCategoriesSaga } from "../../redux/actions/ProjectCategoryAction";
import { updateProject } from "../../redux/actions/ProjectActions";


function EditProjectForm(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
    } = props;

    const dispatch = useDispatch();

    const {projectCategories} = useSelector(state => state.ProjectCategoryReducer);

    useEffect(() => {
        dispatch(getAllProductCategoriesSaga())
        dispatch(setSubmitForm(handleSubmit));
    }, [])


    const handleEditorChange = (content, editor) => {
        setFieldValue('description', content);
    };

    return (
        <form className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <div className="form-group">
                        <p className="fw-bold">Project id</p>
                        <input disabled value={values.id} name="projectID" type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="form-group">
                        <p className="fw-bold">Project name</p>
                        <input type="text" value={values.projectName} onChange={handleChange} name="projectName" className="form-control" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="form-group">
                        <p className="fw-bold">Project category</p>
                        <select className="form-control" name="categoryID" onChange={handleChange} value={values.categoryID}>
                            {projectCategories.map((item, index) => {
                                return <option key={index} value={item.id}>{item.projectCategoryName}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <p className="fw-bold">Project category</p>
                        <Editor
                            apiKey="ghz6w7f3x6gvo3c6cq2ci3ry3chsala0dvke6r7v9nt2pltu"
                            onEditorChange={handleEditorChange}
                            initialValue={values.description}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

const EditForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        const {editedProject} = props;
        return {
            id: editedProject.id,
            projectName: editedProject.projectName,
            description: editedProject.description,
            categoryID: editedProject.categoryId,
        };
    },
    validationSchema: Yup.object().shape({}),
    handleSubmit: (values, { props, setSubmitting }) => {
        props.dispatch(updateProject(values))
    },
    displayName: "Edit project form",
})(EditProjectForm);

const mapStateToProps = (state) => {
    return {
        editedProject: state.ProjectReducer.editedProject,
    };
};

export default connect(mapStateToProps)(EditForm);