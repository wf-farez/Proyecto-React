import React ,{useState, useEffect} from "react";

const initialFormValues={

    title:"",
    description:""
}


const TodoForm =({todoAdd,todoEdit,todoUpdate,setTodoEdit})=>{

    
    const [formValues,setFormValues]=useState(initialFormValues);
    const {title,description}=formValues;
    const [error,setError]=useState(null);
    const [successMessage,setsuccessMessage]=useState(null);


    useEffect(()=>{
        if(todoEdit){
            setFormValues(todoEdit)
        }else{
            setFormValues(initialFormValues)
        }
        
    },[todoEdit])

    const handleInputChange = (e) => {
        const changedFormValues={
            ...formValues,
            [e.target.name]:e.target.value
        }
        setFormValues(changedFormValues);
       
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim()===''){
            setError('Debes indicar titulo')
        return;

        }

        if(description.trim()===''){
            setError('Debes indicar una descripcion')
        return;

        }

    if(todoEdit){
        //actualizar 
        todoUpdate(formValues);
        setsuccessMessage("Actualizado con exito");

    }else{
        //Agregar tarea
        todoAdd(formValues);
        setsuccessMessage("Agregado con exito");
        setFormValues(initialFormValues);

    }

       
       setTimeout(()=>{
        setsuccessMessage(null);
       },2000)
       setError(null);

       
    }

    return (
        <div>


        
        <h2 className="text-center display-4">{ todoEdit ? 'Editar tarea': 'Nueva tarea'}</h2>
    {
        todoEdit&&
        <button 
        onClick={()=>setTodoEdit(null)}
        className="btn btn-sm btn-warning mb-2"
        >Cancelar Edicion
        </button>
    }


        <form onSubmit={handleSubmit}> 
            < input 
                type="text" 
                placeholder="Titulo" 
                className="form-control"
                value={title}
                name="title"
                onChange={handleInputChange}
            />

            <textarea 
                placeholder="Descripcion" 
                className="form-control mt-2"
                value={description}
                name="description"
                onChange={handleInputChange}
            ></textarea>

            <button 
                className="btn btn-primary btn-block mt-2"
                > { todoEdit ? 'Actualizar tarea': 'Agregar tarea'}

                </button>
        </form>

        {
            error 
            ?(
                <div className="alert alert-danger">
                    {error}
                </div>
        
            ):(
                null
                )

        }
        

        {
            successMessage
            ?(
                <div className="alert alert-success">
                    {successMessage}
                </div>
        
            ):(
                null
                )

        }


        </div>
    );
}

export default TodoForm;