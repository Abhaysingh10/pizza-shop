import React, { useEffect } from 'react'
import { Toaster, toast } from 'sonner';
import { Button, Form } from "react-bootstrap";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { setPizza } from './pizzaFormReducer';
const PizzaForm = () => {

    const { order } = useSelector(state => state.orderData)
    const dispatch = useDispatch()

    const {
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const type = [
        { value: "veg", label: "Veg" },
        { value: "nonveg", label: "Non-veg" },
    ];
    const size = [
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" },
    ];

    const base = [
        { value: "thin", label: "Thin" },
        { value: "thick", label: "Thick" },
    ];

    const generateOrderId = () => {
        return (order.length + 1).toString().padStart(3, '0');
    };

    const onSave = (value) => {
        order?.length < 10 ? dispatch(setPizza(value)) : toast("Not taking any order for now")
        reset({
            type: null,
            size: null,
            base: null
        });
    };



    return (
        <div className="order-form container my-4 ">
            <header className="App-header " style={{width:"90%"}}>
                <div className="">
                    <Form>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>
                                {/* Type <span style={{ color: "red" }}>*</span>{" "} */}
                            </Form.Label>
                            <Controller
                                name="type"
                                control={control}
                                rules={{ required: "This field is required!" }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        placeholder="Type"
                                        options={type}
                                        onChange={(val) => {
                                            field.onChange(val)
                                        }}
                                    />
                                )}
                            />
                            {errors.type && (
                                <span style={{ color: "red", fontSize:"small" }}>Type is required !</span>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-1" controlId="formBasicPassword">
                            <Form.Label>
                                {/* Size <span style={{ color: "red" }}>*</span> */}
                            </Form.Label>
                            <Controller
                                name="size"
                                control={control}
                                rules={{ required: "This field is required!" }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        placeholder="Size"
                                        options={size}
                                        onChange={(selectedOption) =>
                                            field.onChange(selectedOption)
                                        }

                                    />
                                )}
                            />
                            {errors.size && (
                                <span style={{ color: "red", fontSize:"small" }}>Size is required !</span>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-1" controlId="formBasicPassword">
                            <Form.Label>
                                {/* Base <span style={{ color: "red" }}>*</span> */}
                            </Form.Label>
                            <Controller
                                name="base"
                                control={control}
                                rules={{ required: "This field is required!" }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={base}
                                        placeholder="Base"
                                        onChange={(selectedOption) =>
                                            field.onChange(selectedOption)
                                        }

                                    />
                                )}
                            />
                            {errors.base && (
                                <span style={{ color: "red", fontSize:"small" }}>Base is required !</span>
                            )}
                        </Form.Group>

                        <Button variant="primary" onClick={handleSubmit(onSave)}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </header>
            <Toaster
                toastOptions={{
                    style: {
                        background: 'black',
                        color: "white"
                    },
                    className: 'class',
                }}
            />
        </div>
    )
}

export default PizzaForm