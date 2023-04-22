import React, { useEffect, useState } from 'react'


export const AjaxComponent = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errores, setErrores] = useState(null);

    // Generico / basico
    const getUserEstatico = () => {
        setUsers ([{
                    "id": 7,
                    "email": "michael.lawson@reqres.in",
                    "first_name": "Michael",
                    "last_name": "Lawson",
                    "avatar": "https://reqres.in/img/faces/7-image.jpg"
                },
                {
                    "id": 8,
                    "email": "lindsay.ferguson@reqres.in",
                    "first_name": "Lindsay",
                    "last_name": "Ferguson",
                    "avatar": "https://reqres.in/img/faces/8-image.jpg"
                },
                {
                    "id": 9,
                    "email": "tobias.funke@reqres.in",
                    "first_name": "Tobias",
                    "last_name": "Funke",
                    "avatar": "https://reqres.in/img/faces/9-image.jpg"
                },
            ] // Array de objetos
        );
    };

    // promesas
    const getUserPromesa = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then(resp => resp.json())
            .then(({data}) => {
                setUsers(data)
            }, (error) => {
                console.log(error);
                setErrores(error.message);
            }
        );
    };

    // async await
    const getUserAsyncAwait =  () => {
        setTimeout(async() => {
            try {
                const resp = await fetch('https://reqres.in/api/users?page=2');
                const {data} = await resp.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.log("Hay un error ----->", error);
                setErrores(error.message);
            }
        }, 3000);

    };

    useEffect(() => {
        getUserAsyncAwait();
    }, []);

    if(errores !== null){
        // Cuando hay un error
        return (
            <div className="error">
                {errores}
            </div>
        )
    } else if(loading) {
     // Cuando se esta cargando
    return (
        <div className="cargando">
            Cargando datos....
        </div>
    )
    } else if(loading === false && errores === null){
        // Cuando todo ha ido bien
        return (
            <div>
                <h2>Listado de Usuarios via Ajax</h2>
                <ol className='usuarios'>
                    {
                        users.map( _user => {
                            console.log(_user);
                            return <li key={_user.id}>
                                    <img src={_user.avatar} alt={_user.first_name} width="20px"/>&nbsp;
                                    {_user.first_name} {_user.last_name}
                                </li>
                        }
                    )
                    }
                </ol>
            </div>
        )
    }

}
