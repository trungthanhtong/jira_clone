import React, { useState } from "react";
import {
    Drawer,
    Form,
    Button,
    Col,
    Row,
    Input,
    Select,
    DatePicker,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_DRAWER } from "../../redux/constants/DrawerConstants";

const { Option } = Select;

export default function DrawerHOC(props) {

    const {visible, ComponentContent, callbackSubmit, title} = useSelector(state => state.DrawerReducer);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch({type: CLOSE_DRAWER})
    }


    return (
        <Drawer
            title={title}
            width={720}
            onClose={onClose}
            visible={ visible}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
                <div
                    style={{
                        textAlign: "right",
                    }}
                >
                    <Button onClick={onClose} style={{ marginRight: 8 }}>
                        Cancel
                    </Button>
                    <Button onClick={(e) => {
                        onClose();
                        callbackSubmit(e);
                    }} type="primary">
                        Save
                    </Button>
                </div>
            }
        >
            {ComponentContent}
        </Drawer>
    );
}
