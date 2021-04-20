import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MainContent from '../../components/Main/Content';
import MainHeader from '../../components/Main/Header';
import MainInfo from '../../components/Main/Info';
import { getProjectDetail } from '../../redux/actions/ProjectActions';

export default function Board(props) {

    const {projectDetail} = useSelector(state => state.ProjectReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const {projectID} = props.match.params;
        dispatch(getProjectDetail(projectID));
    }, [])

    return (
        <div className="main">
            <MainHeader projectDetail={projectDetail}/>
            <MainInfo projectDetail={projectDetail}/>
            <MainContent projectDetail={projectDetail} />
        </div>
    );
}
