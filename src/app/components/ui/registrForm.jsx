import React, { useEffect, useState } from 'react';
import { validator } from '../../utils/validator';
import TextField from '../common/form/textField';
import api from '../../api';
import SelectField from '../common/form/selectField';
import RedioField from '../common/form/redioField';
import MultiSelectField from '../common/form/multiSelectField';
import CheckBoxFild from '../common/form/checkBoxFild';

const RegistrForm = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        profession: '',
        sex: 'male',
        qualities: [],
        licence: false
    });

    const [qualities, setQualities] = useState({});
    const [professions, setProfession] = useState();
    const [errors, setErrors] = useState({});

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };
    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitiesArray;
    };

    // useEffect(() => {
    //     api.professions.fetchAll().then((data) => setProfession(data));
    //     api.qualities.fetchAll().then((data) => setQualities(data));
    // }, []);
        useEffect(() => {
            api.professions.fetchAll().then((data) => {
                const professionsList = Object.keys(data).map(
                    (professionName) => ({
                        label: data[professionName].name,
                        value: data[professionName]._id
                    })
                );
                setProfession(professionsList);
            });
            api.qualities.fetchAll().then((data) => {
                const qualitiesList = Object.keys(data).map((optionName) => ({
                    value: data[optionName]._id,
                    label: data[optionName].name,
                    color: data[optionName].color
                }));
                setQualities(qualitiesList);
            });
        }, []);

    const handelChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: { message: 'Email введен некорректно' }
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения'
            },
            isCapitalSimbol: {
                message: 'Пароль должен содержать хотябы одну заглавнуь букву'
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотябы одну цифру'
            },
            min: {
                message: 'Пароль должен состоять минимум из 8 символов',
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: 'Обязательно выберите вашу профессию'
            }
        },
        licence: {
            isRequired: {
                message:
                    'Вы не можете использовать наш сервис без подтверждения лицензионного соглашения'
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const isValid = validate();
    //     if (!isValid) return;
    //     console.log(data);
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { profession, qualities } = data;
        console.log({
            ...data,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handelChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handelChange}
                error={errors.password}
            />
            <SelectField
                label="Выберите вашу профессию"
                defaultOption="Выбирать..."
                name="professions"
                options={professions}
                onChange={handelChange}
                value={data.profession}
                error={errors.profession}
            />
            <RedioField
                options={[
                    { name: 'Мужчина', value: 'male' },
                    { name: 'Женщина', value: 'female' },
                    { name: 'Другое', value: 'other' }
                ]}
                value={data.sex}
                name="sex"
                onChange={handelChange}
                label="Выберите ваш пол"
            />
            <MultiSelectField
                options={qualities}
                onChange={handelChange}
                defaultValue={data.qualities}
                name="qualities"
                label="Выберите ваши качества"
            />
            <CheckBoxFild
                name="licence"
                value={data.licence}
                onChange={handelChange}
                error={errors.licence}
            >
                {' '}
                Подтвердить <a>лицензионное соглашение</a>{' '}
            </CheckBoxFild>
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    );
};

export default RegistrForm;
